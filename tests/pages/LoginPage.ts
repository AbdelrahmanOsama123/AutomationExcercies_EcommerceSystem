import {expect,type Locator,type Page} from '@playwright/test';

export class LoginPage{
    private readonly page : Page;
    private readonly usernameTxt : Locator;
    private readonly passwordTxt : Locator;
    private readonly loginBtn : Locator;
    private readonly loginMessage : Locator ;
    private readonly logoutBtn : Locator;
    private readonly failedMessage : Locator;
    private readonly failedText : string = "Your email or password is incorrect!";

    constructor(page:Page){
        this.page = page;
        this.usernameTxt = this.page.getByPlaceholder("Email Address");
        this.passwordTxt = this.page.getByPlaceholder("Password");
        this.loginBtn = this.page.locator("//button[normalize-space()='Login']");
        this.loginMessage = this.page.locator("div[class='login-form'] h2")
        this.logoutBtn = this.page.getByRole("link",{name :"Logout"});
        this.failedMessage = this.page.locator("//p[normalize-space()='Your email or password is incorrect!']");
    }
    
    public async userCanLogin(username:string,password:string){
        await this.usernameTxt.nth(0).fill(username);
        await this.passwordTxt.fill(password);
        await this.loginBtn.click();
    }

    public async userCanLogout(){
        await this.logoutBtn.click();
    }

    public async assertLoginMessage(){
        await expect(this.loginMessage).toHaveText("Login to your account")
    }

    public async assertLogoutBtnisVisible(){
        await expect(this.logoutBtn).toBeVisible();
    }

    public async assertFailedMessage(){
        await expect(this.failedMessage).toHaveText(this.failedText);
    }
}