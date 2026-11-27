import {type Page} from '@playwright/test';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { ContactUsPage } from './ContactUsPage';

export class PageObjectManager{
    readonly page : Page;
    readonly loginPage : LoginPage;
    readonly homePage : HomePage;
    readonly contactUsPage : ContactUsPage;

    constructor(page : Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
        this.contactUsPage = new ContactUsPage(this.page);
    }

    public getHomePage(){
        return this.homePage;
    }

    public getLoginPage(){
        return this.loginPage;
    }

    public getContactUsPage(){
        return this.contactUsPage;
    }
}