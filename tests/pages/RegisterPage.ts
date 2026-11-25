import {expect,type Locator,type Page} from '@playwright/test';

export class RegisterPage{
    private readonly page : Page;
    private readonly nameTxt : Locator;
    private readonly emailTxt : Locator;
    private readonly registerBtn : Locator; 
    private readonly enterAccountMessage : Locator;
    private readonly genderRadionBtn : Locator;
    private readonly passwordTxt : Locator;
    private readonly daysList : Locator;
    private readonly monthsList : Locator;
    private readonly yearsList : Locator;
    private readonly newsLetterCheckBox : Locator;
    private readonly specialOfferCheckBox : Locator;
    private readonly firstNameTxt : Locator;
    private readonly lastNameTxt : Locator;
    private readonly address1Txt : Locator;
    private readonly address2Txt : Locator;
    private readonly countryList : Locator;
    private readonly companyTxt : Locator;
    private readonly stateTxt : Locator;
    private readonly cityTxt : Locator;
    private readonly zipcodeTxt : Locator;
    private readonly mobileNumberTxt : Locator;
    private readonly submitBtn : Locator;
    private readonly successMessage : Locator;
    private readonly continueBtn : Locator;
    private readonly deleteAccountBtn : Locator;
    private readonly deleteSuccessMessage : Locator;
    private readonly registerMessage : Locator;
    private readonly failedMessage : Locator;

    constructor(page:Page){
        this.page = page;
        this.nameTxt = page.getByPlaceholder("Name");
        this.emailTxt = page.locator("//input[@data-qa='signup-email']");
        this.registerBtn = page.locator('//*[@id="form"]/div/div/div[3]/div/form/button');
        this.enterAccountMessage = page.locator("//b[normalize-space()='Enter Account Information']")
        this.genderRadionBtn = page.locator("#id_gender1");
        this.passwordTxt = page.locator("#password");
        this.daysList = page.locator("#days");
        this.monthsList = page.locator("#months");
        this.yearsList = page.locator("#years");
        this.newsLetterCheckBox = page.locator("#newsletter");
        this.specialOfferCheckBox = page.locator("#optin");
        this.firstNameTxt = page.locator("#first_name");
        this.lastNameTxt = page.locator("#last_name");
        this.companyTxt = page.locator("#company");
        this.address1Txt = page.locator("#address1");
        this.address2Txt = page.locator("#address2");
        this.countryList = page.locator("#country");
        this.stateTxt = page.locator("#state");
        this.cityTxt = page.locator("#city");
        this.zipcodeTxt = page.locator("#zipcode");
        this.mobileNumberTxt = page.locator("#mobile_number");
        this.submitBtn = page.locator("//button[normalize-space()='Create Account']");
        this.successMessage = page.locator("//b[normalize-space()='Account Created!']");
        this.continueBtn = page.getByRole("link",{name:"Continue"});
        this.deleteAccountBtn = page.getByRole("link",{name:"Delete Account"});
        this.deleteSuccessMessage = page.locator('//*[@id="form"]/div/div[1]/div/h2/b')
        this.registerMessage = page.locator("//h2[normalize-space()='New User Signup!']");
        this.failedMessage = page.locator("//p[normalize-space()='Email Address already exist!']//p[normalize-space()='Email Address already exist!']");
    }

    public async userCanRegister(name:string,email:string){
        await this.nameTxt.fill(name);
        await this.emailTxt.fill(email);
        await this.registerBtn.click();
    }

    public async userCanEnterInformation(password:string,day: string,month:number,year:string,
        firstName: string,lastName:string,company:string,address1:string,address2:string,
        country:string,state:string,city:string,zipCode:string,mobileNumber:string
    ){
        await this.genderRadionBtn.click();
        await this.passwordTxt.fill(password);
        await this.daysList.selectOption({label : day});
        await this.monthsList.selectOption({index : month});
        await this.yearsList.selectOption({value : year});
        await this.newsLetterCheckBox.click();
        await this.specialOfferCheckBox.click();
        await this.firstNameTxt.fill(firstName);
        await this.lastNameTxt.fill(lastName);
        await this.companyTxt.fill(company);
        await this.address1Txt.fill(address1);
        await this.address2Txt.fill(address2);
        await this.countryList.selectOption(country);
        await this.stateTxt.fill(state);
        await this.cityTxt.fill(city);
        await this.zipcodeTxt.fill(zipCode);
        await this.mobileNumberTxt.fill(mobileNumber);
        await this.submitBtn.click();
    }

    public async userCanContinue(){
        await this.continueBtn.click();
    }

    public async userCanDeleteAccount(){
        await this.deleteAccountBtn.click();
    }
    
    public async assertResgiserMessage(){
        await expect(this.registerMessage).toHaveText("New User Signup!")
    }

    public async assertFailedMessage(){
        await expect(this.failedMessage).toHaveText("Email Address already exist!")
    }

    public async assertEnterAccountMessage(){
        await expect(this.enterAccountMessage).toHaveText("Enter Account Information");
    }

    public async assertSuccessMessage(){
        await expect(this.successMessage).toHaveText("Account Created!",{timeout:10000});
    }

    public async assertDeleteAccountBtn(){
        await expect(this.deleteAccountBtn).toBeEnabled();
    }

    public async assertDeleteSuccessMessage(){
        await expect(this.deleteSuccessMessage).toHaveText("Account Deleted!",{timeout:20000});
    }
}