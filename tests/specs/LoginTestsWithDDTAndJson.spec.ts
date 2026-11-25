import {test,type Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import loginNegativeData from'../../test_data/LoginNegativeData.json'
import loginHappyData from'../../test_data/LoginHappyData.json'
import LoginNegativeData from '../../test_data/LoginNegativeData.json';

let loginPage : LoginPage;
let homePage : HomePage;

let loginNegative = JSON.parse(JSON.stringify(LoginNegativeData));
let loginHappy = JSON.parse(JSON.stringify(loginHappyData));

test.beforeAll("Before All tests",()=>{
    console.log("Username => "+loginNegative[0].email);
    console.log("Password => "+loginNegative[1].password);
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

    await loginPage.userCanLogin(loginHappy.email, loginHappy.password);
    await loginPage.assertLogoutBtnisVisible();

    await loginPage.userCanLogout();
    await loginPage.assertLoginMessage(); 
});

loginNegativeData.forEach(({ email, password, expected })=>{
    test(`Login with invalid credential for ${expected}`,async ({page})=>{
        await homePage.openLoginPage();
        await loginPage.assertLoginMessage();

        await loginPage.userCanLogin(email, password);
        await loginPage.assertFailedMessage();
    });
})



test.afterAll("After All tests",()=>{
    console.log("Running after all tests");
});

test.afterEach("After each test",()=>{
    console.log("Running after each tests");
});