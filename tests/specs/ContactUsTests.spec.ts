import { test, type Page } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';
import contactUsData from '../../test_data/ContactUsData.json';

interface ContactUsTestData {
    name: string;
    email: string;
    subject: string;
    message: string;
    filePath: string;
}

let pageObjectManager: PageObjectManager;

test.beforeEach('Open the contact us page', async ({ page }: { page: Page }) => {
    pageObjectManager = new PageObjectManager(page);
    await pageObjectManager.getHomePage().openWebsite();
    await pageObjectManager.getHomePage().openContactUsPage();
});

test('Submit contact us form with valid data and file', { tag: '@contact-us' }, async () => {
    const data: ContactUsTestData = contactUsData.valid;

    await pageObjectManager.getContactUsPage().submitContactForm(
        data.name,
        data.email,
        data.subject,
        data.message,
        data.filePath
    );
    await pageObjectManager.getContactUsPage().assertSuccessMessage();
});

test('Submit contact us form with required fields empty', { tag: '@contact-us' }, async () => {
    const data: ContactUsTestData = contactUsData.empty;

    await pageObjectManager.getContactUsPage().submitContactForm(
        data.name,
        data.email,
        data.subject,
        data.message,
        data.filePath
    );
    await pageObjectManager.getContactUsPage().assertRequiredFieldsAreEmpty();
});
