import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PracticeForm from './pageObjects/practiceForm';

Given('I am on the practice form page', () => {
  cy.visit('/automation-practice-form');
});

When('I fill in the personal information', (dataTable) => {
  const data = dataTable.hashes()[0];

  PracticeForm.firstNameField().type(data.firstName);
  PracticeForm.lastNameField().type(data.lastName);
  PracticeForm.emailField().type(data.email);
  PracticeForm.genderRadio(data.gender).click();
  PracticeForm.mobileField().type(data.mobile);
});

When('I select the date of birth as {string}', (date) => {
  const [day, month, year] = date.split(' ');
  PracticeForm.dateOfBirthInput().click();
  cy.get('.react-datepicker__month-select').select(month);
  cy.get('.react-datepicker__year-select').select(year);
  cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
});

When('I select the subjects {string} and {string}', (subject1, subject2) => {
  PracticeForm.subjectInput().type(`${subject1}{enter}`);
  PracticeForm.subjectInput().type(`${subject2}{enter}`);
});

When('I select the hobby {string}', (hobby) => {
  PracticeForm.hobbyCheckbox(hobby).click();
});

When('I upload a picture {string}', (filename) => {
  PracticeForm.uploadPictureInput().selectFile(`cypress/fixtures/${filename}`);
});

When('I fill in the address {string}', (address) => {
  PracticeForm.currentAddressField().type(address);
});

When('I select the state {string} and city {string}', (state, city) => {
  PracticeForm.stateDropdown().click();
  PracticeForm.selectStateOption(state).click();
  PracticeForm.cityDropdown().click();
  PracticeForm.selectCityOption(city).click();
});

When('I submit the form', () => {
  PracticeForm.submitButton().click();
});

Then('I should see the submitted data in the modal', (dataTable) => {
  cy.get('.modal-content').should('be.visible');
  cy.get('.table-responsive').within(() => {
    dataTable.hashes().forEach(({ field, value }) => {
      cy.contains(field).next().should('contain', value);
    });
  });
});

When('I click the submit button without filling any fields', () => {
  PracticeForm.submitButton().click({ force: true });
});

Then('I should see validation warnings on required fields', () => {
  PracticeForm.firstNameField().should('have.css', 'border-color', 'rgb(220, 53, 69)');
  PracticeForm.lastNameField().should('have.css', 'border-color', 'rgb(220, 53, 69)');
  PracticeForm.mobileField().should('have.css', 'border-color', 'rgb(220, 53, 69)');
  cy.get('input[name="gender"][required]').should('exist');
});

When('I click the close button on form modal', () => {
  cy.get('#closeLargeModal').click({ force: true });
});
