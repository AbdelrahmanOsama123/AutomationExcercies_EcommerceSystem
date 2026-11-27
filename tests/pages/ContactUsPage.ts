import { expect, type Locator, type Page } from '@playwright/test';

export class ContactUsPage {
    private readonly nameTxt: Locator;
    private readonly emailTxt: Locator;
    private readonly subjectTxt: Locator;
    private readonly messageTxt: Locator;
    private readonly fileInput: Locator;
    private readonly submitBtn: Locator;
    private readonly successMessage: Locator;

    constructor(private readonly page: Page) {
        this.nameTxt = page.getByPlaceholder('Name');
        this.emailTxt = page.getByPlaceholder('Email', { exact: true });
        this.subjectTxt = page.getByPlaceholder('Subject');
        this.messageTxt = page.getByPlaceholder('Your Message Here');
        this.fileInput = page.locator('input[name="upload_file"]');
        this.submitBtn = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.locator('.status.alert.alert-success');
    }

    public async submitContactForm(
        name: string,
        email: string,
        subject: string,
        message: string,
        filePath: string
    ): Promise<void> {
        await this.nameTxt.fill(name);
        await this.emailTxt.fill(email);
        await this.subjectTxt.fill(subject);
        await this.messageTxt.fill(message);

        if (filePath) {
            await this.fileInput.setInputFiles(filePath);
        }

        this.page.on('dialog', async(dialog) =>{
            await dialog.accept();
        });

        await this.submitBtn.click();
    }

    public async assertSuccessMessage(): Promise<void> {
        await expect(this.successMessage).toHaveText(
            'Success! Your details have been submitted successfully.'
        );
    }

    public async assertRequiredFieldsAreEmpty(): Promise<void> {
        await expect(this.nameTxt).toBeEmpty();
        await expect(this.emailTxt).toBeEmpty();
        await expect(this.subjectTxt).toBeEmpty();
        await expect(this.messageTxt).toBeEmpty();
    }
}
