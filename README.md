# 🚀 Automation Exercise E2E Test Automation Framework

> **Framework Overview:** An advanced End-to-End (E2E) Test Automation framework built for the [Automation Exercise](https://automationexercise.com/) platform, using **Playwright** and **TypeScript**. It follows industrial design patterns like **Page Object Model (POM)**, **Page Object Manager**, and **Data-Driven Testing (DDT)**.

---

## 📂 Project Architecture & Directory Structure

```text
📦 AutomationExercise_EcommerceSystem
 ┣ 📂 test_data
 ┃ ┣ 📜 LoginHappyData.json
 ┃ ┣ 📜 LoginHappyData.ts
 ┃ ┣ 📜 LoginNegativeData.json
 ┃ ┗ 📜 LoginNegativeData.ts
 ┣ 📂 tests
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 HomePage.ts
 ┃ ┃ ┣ 📜 LoginPage.ts
 ┃ ┃ ┣ 📜 RegisterPage.ts
 ┃ ┃ ┗ 📜 PageObjectManager.ts
 ┃ ┗ 📂 specs
 ┃   ┣ 📜 LoginTestsWithDDTAndJson.spec.ts
 ┃   ┣ 📜 LoginTestsWithDDTAndTS.spec.ts
 ┃   ┗ 📜 RegisterTests.spec.ts
 ┣ 📜 package.json
 ┗ 📜 playwright.config.ts
```

🤖 Instructions for AI Agents (Future Execution Guide)
If you are an AI Agent reading this file to update, scale, or generate new test scripts, follow these mandatory rules:

1. Adhere to POM Architecture
Never write raw page.locator() directly inside a .spec.ts file.

All locators and actions must reside inside their respective Page classes under tests/pages/.

2. Use PageObjectManager
Always initialize pages through PageObjectManager in test.beforeEach hooks.

Do not instantiate pages manually with new inside spec files.

3. Data-Driven Approach
For negative test scenarios or multi-dataset tests, load external data from the test_data/ directory.

Loop through the dataset outside the test() block using forEach to generate independent test blocks.

4. TypeScript Strict Typing
Ensure all method parameters, page properties, and data objects are strictly typed.

Avoid using any unless absolutely necessary.

5. Naming Conventions
Page Classes: [PageName]Page.ts

Test Specs: [Feature]Tests.[extension].spec.ts

Test Data: [Feature][Type]Data.[ts/json]

## Setup and Execution Commands

### Install Dependencies

``` bash
    npm install
```

#### Run all tests (HeadLess Mode)
``` bash
    npx playwright test
```

#### Run Tests with UI Mode
``` bash
    npx playwright test --ui
```

#### View HTML Test Report
``` bash
    npx playwright show-report
```


