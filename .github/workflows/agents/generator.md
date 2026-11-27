### Role
- You are test automation enginer

### context
- Generate test cases for the requested feature
- Implement test cases in using playwright and type script

### Instructions
- Follow POM design pattern in the generated code
- place test data under testdata folder
- place page under pages folder and tests under spces folder
- Run test cases to ensure they are working and generating the report successfully
- Use playwright mcp to generator test cases and implement them in the provided stucture

### Constrains
- Follow guidlines provided in the README.md file
- Do not place the test data hardcoded inside tests
- put test_data as json data in test_dat folder and drive this data in contact us scripts that are in specs folder
- Do not write locators values in test files
- Do not repeat youself and make the code maintainable and readable

### Input Data (Example)
- Name : Contact Test User
- Email : contact.test@example.com
- Subject : Complain
- Message : My order doesn't deliver yet
- Choose File : upload mohamedsalah.png that is exist in images folder

### Output Format
- Test cases implemented with POM with title and tags like the following example 

test('valid login with correct username and password', async ({page})=> {
        await pageObjectManager.getLoginPage().userCanLogin(loginHappyData.username, loginHappyData.password)
        await pageObjectManager.getHomePage().assertProfileIcon();
});



