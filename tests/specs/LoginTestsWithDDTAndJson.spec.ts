import {test,type Page} from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';
import loginNegativeData from'../../test_data/LoginNegativeData.json'
import loginHappyData from'../../test_data/LoginHappyData.json'
import LoginNegativeData from '../../test_data/LoginNegativeData.json';

let pageObjectManager : PageObjectManager;

let loginNegative = JSON.parse(JSON.stringify(LoginNegativeData));
let loginHappy = JSON.parse(JSON.stringify(loginHappyData));

test.beforeAll("Before All tests",()=>{
    console.log("Username => "+loginNegative[0].email);
    console.log("Password => "+loginNegative[1].password);
    console.log("Running before all tests");
});

test.beforeEach("Before each test",async ({page},testInfo)=>{
    pageObjectManager = new PageObjectManager(page);

    await pageObjectManager.getHomePage().openWebsite();
    console.log(`Running before test case with tilte ${testInfo.title}`);
});

test("Login with valid credential",async ({page})=>{
    await pageObjectManager.getHomePage().openLoginPage();
    await pageObjectManager.getLoginPage().assertLoginMessage();

    await pageObjectManager.getLoginPage().userCanLogin(loginHappy.email, loginHappy.password);
    await pageObjectManager.getLoginPage().assertLogoutBtnisVisible();

    await pageObjectManager.getLoginPage().userCanLogout();
    await pageObjectManager.getLoginPage().assertLoginMessage(); 
});

loginNegativeData.forEach(({ email, password, expected })=>{
    test(`Login with invalid credential for ${expected}`,async ({page})=>{
        await pageObjectManager.getHomePage().openLoginPage();
        await pageObjectManager.getLoginPage().assertLoginMessage();

        await pageObjectManager.getLoginPage().userCanLogin(email, password);
        await pageObjectManager.getLoginPage().assertFailedMessage();
    });
})



test.afterAll("After All tests",()=>{
    console.log("Running after all tests");
});

test.afterEach("After each test",()=>{
    console.log("Running after each tests");
});