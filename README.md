# Cypress Test Automation Project

This project contains end-to-end and API tests using [Cypress](https://www.cypress.io/) with [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor). It uses the **Page Object Model (POM)** structure.

---

##  What is tested?

### 1. DemoQA Form Automation

Automated tests are written for the [DemoQA Practice Form](https://demoqa.com/automation-practice-form).  
These tests fill out the form, upload a picture, select options, and check if the submitted data is displayed correctly.  
It also includes validation checks when required fields are empty.

Feature file: `practice-form.feature`  
Steps: `practice-form-steps.js`

---

### 2. Reqres API Tests (Optional Task)

Automated API tests are created for the following public API: [https://reqres.in/api/users](https://reqres.in/api/users)

Tested endpoints:

- `GET /api/users/{id}`
- `GET /api/users?page=2`
- `POST /api/users` (with header `x-api-key: reqres-free-v1`)

Assertions include response status, user fields, support data, and response structure.

Feature file: `users-api.feature`  
Steps: `users-api-steps.js`

###  Note about Reqres API reliability

The API used for backend tests (https://reqres.in/api/users) is a free and public service. It is made for testing and learning only.

Sometimes, the API may give errors or respond slowly. This can happen even if the test code is correct and not changed.

These errors are not test failures. They happen because the API is not a real production system.

---

##  Test Reports

This project includes [Mochawesome](https://www.npmjs.com/package/mochawesome) reporter to generate HTML test reports.

After running the tests, open the report from:  
cypress/reports/html/index.html

---
##  Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/SevcanEgretli/demoqa-cypress.git
cd demoqa-cypress
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run Tests

Run all tests in headless mode:

```bash
npm run test
```
Run tests in headed mode (Chrome):

```bash
npm run test:headed
```

###  Project Structure
```bash
demoqa-cypress/
├── cypress/
│   ├── integration/
│   │   └──features/                 # Feature files (form & API)
│   ├── fixtures/                    # Sample files (e.g., sample.png)
│   └── support/
│       └── pageObjects/             # Page Object classes
│           └── step_definitions/    # Step definitions for Cucumber
├── cypress.config.js                # Cypress configuration
├── package.json                     # Project dependencies and scripts
├── README.md                        # Project info
└── reports/                         # HTML reports (after test run)
```

    