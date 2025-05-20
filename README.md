# DemoQA Cypress Automation

This project is an end-to-end test automation setup using Cypress.  
It covers automated form submission and validation on the [DemoQA Practice Form](https://demoqa.com/automation-practice-form) page using the **Page Object Model (POM)** structure.

---

## 📦 Project Setup

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
│   ├── e2e/                 # Test files
│   ├── pageObjects/         # Page Object Model classes
│   ├── fixtures/            # Sample files (e.g. sample.png)
│   └── support/             # Global setup
├── cypress.config.js        # Cypress configuration
├── package.json             # Project dependencies and scripts
└── .gitignore               # Ignored files and folders
```