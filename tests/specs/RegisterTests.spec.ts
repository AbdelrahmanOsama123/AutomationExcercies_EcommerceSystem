import {test,type Page} from '@playwright/test';
import {PageObjectManager} from '../pages/PageObjectManager';

let pageObjectManager : PageObjectManager;

test.beforeAll("Before All tests",()=>{
    console.log("Running before all tests");
});

test.beforeEach("Before each test",async ({page},testInfo)=>{
    pageObjectManager = new PageObjectManager(page);

    await pageObjectManager.getHomePage().openWebsite();
    console.log(`Running before test case with tilte ${testInfo.title}`);
});

test("Register with new email",async ({page})=>{
    await pageObjectManager.getHomePage().openLoginPage();
    await pageObjectManager.getRegisterPage().assertResgiserMessage();
    await pageObjectManager.getRegisterPage().userCanRegister("Abdelrahman Osama", "mohamedfouad12345@gmail.com");
    await pageObjectManager.getRegisterPage().assertEnterAccountMessage();
    await pageObjectManager.getRegisterPage().userCanEnterInformation("a123456789", "1", 1, "1999", "Abdelrahman", "Osama", "Itworx", "fostat city", "Sayeda zeinab", "India", "aaaa", "bbbb", "17611", "01013400554")
    await pageObjectManager.getRegisterPage().assertSuccessMessage();
    await pageObjectManager.getRegisterPage().userCanContinue();
    await pageObjectManager.getRegisterPage().userCanDeleteAccount();
    await pageObjectManager.getRegisterPage().assertDeleteSuccessMessage();
});

test("Register with exist email",async ({page})=>{
    await pageObjectManager.getHomePage().openLoginPage();
    await pageObjectManager.getRegisterPage().assertResgiserMessage();
    await pageObjectManager.getRegisterPage().userCanRegister("Abdelrahman Osama", "abdelrahmanosama769@gmail.com");
    await pageObjectManager.getRegisterPage().assertFailedMessage();
});

test.afterAll("After All tests",()=>{
    console.log("Running after all tests");
});

test.afterEach("After each test",()=>{
    console.log("Running after each tests");
});