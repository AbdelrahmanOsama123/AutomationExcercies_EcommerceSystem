import {expect,type Locator,type Page} from '@playwright/test';

export class HomePage{
    private readonly loginBtn : Locator;
    private readonly page : Page;

    constructor(page:Page){
        this.page = page;
        this.loginBtn = page.getByRole("link",{name:"Signup / Login"});
    }

    public async openWebsite(){
        await this.page.goto("https://automationexercise.com/");
    }

    public async openLoginPage(){
        await this.loginBtn.click();
    }

    public async openRegisterPage(){
        await this.loginBtn.click();
    }
}
