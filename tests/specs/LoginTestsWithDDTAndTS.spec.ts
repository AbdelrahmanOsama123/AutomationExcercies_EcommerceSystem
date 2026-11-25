import {test,type Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import loginNegativeData from'../../test_data/LoginNegativeData.ts'
import loginHappyData from'../../test_data/LoginHappyData.ts'

let loginPage : LoginPage;
let homePage : HomePage;


test.beforeAll("Before All tests",()=>{
    console.log("Running before all tests");
});

test.beforeEach("Before each test",async ({page},testInfo)=>{
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.openWebsite();
    console.log(`Running before test case with tilte ${testInfo.title}`);
});

test("Login with valid credential",async ({page})=>{
    await homePage.openLoginPage();
    await loginPage.assertLoginMessage();

    await loginPage.userCanLogin(loginHappyData.email, loginHappyData.password);
    await loginPage.assertLogoutBtnisVisible();

    await loginPage.userCanLogout();
    await loginPage.assertLoginMessage(); 
});

loginNegativeData.forEach(({email,password,expected})=>{
    test(`Login with invalid credential for ${expected}`,async ({page})=>{
        await homePage.openLoginPage();
        await loginPage.assertLoginMessage();

        await loginPage.userCanLogin(email, password);
        await loginPage.assertFailedMessage();
    });
});

test.afterAll("After All tests",()=>{
    console.log("Running after all tests");
});

test.afterEach("After each test",()=>{
    console.log("Running after each tests");
});