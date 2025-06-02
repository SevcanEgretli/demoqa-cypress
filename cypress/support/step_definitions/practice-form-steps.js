import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the practice form page', () => {
  cy.visit('/automation-practice-form')
})

When('I fill in the personal information', (dataTable) => {
  const data = dataTable.hashes()[0]
  cy.get('#firstName').type(data.firstName)
  cy.get('#lastName').type(data.lastName)
  cy.get('#userEmail').type(data.email)
  let genderValue;

  if (data.gender === 'Male') {
    genderValue = '1';
  } else if (data.gender === 'Female') {
    genderValue = '2';
  } else {
    genderValue = '3'; // Other
  }

  cy.get(`[for="gender-radio-${genderValue}"]`).click()
  cy.get('#userNumber').type(data.mobile)
})

When('I select the date of birth as {string}', (date) => {
  const [day, month, year] = date.split(' ')
  cy.get('#dateOfBirthInput').click()
  cy.get('.react-datepicker__month-select').select(month)
  cy.get('.react-datepicker__year-select').select(year)
  cy.get(`.react-datepicker__day--0${day}`).click()
})

When('I select the subjects {string} and {string}', (subject1, subject2) => {
  cy.get('#subjectsInput').type(`${subject1}{enter}`)
  cy.get('#subjectsInput').type(`${subject2}{enter}`)
})

When('I select the hobby {string}', (hobby) => {
  cy.contains('label.custom-control-label', hobby).click()
})

When('I upload a picture {string}', (filename) => {
  cy.get('#uploadPicture').selectFile(`cypress/fixtures/${filename}`)
})

When('I fill in the address {string}', (address) => {
  cy.get('#currentAddress').type(address)
})

When('I select the state {string} and city {string}', (state, city) => {
  cy.get('#state').click()
  cy.get('#react-select-3-option-0').click() // NCR
  cy.get('#city').click()
  cy.get('#react-select-4-option-0').click() // Delhi
})

When('I submit the form', () => {
  cy.get('#submit').click()
})

Then('I should see the submitted data in the modal', (dataTable) => {
  cy.get('.modal-content').should('be.visible')
  cy.get('.table-responsive').within(() => {
    dataTable.hashes().forEach(({ field, value }) => {
      cy.contains(field).next().should('contain', value)
    })
  })
}) 

When('I click the submit button without filling any fields', () => {
  cy.get('#submit').click({ force: true });
});

Then('I should see validation warnings on required fields', () => {
  cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  cy.get('input[name="gender"][required]').should('exist');
});


When('I click the close button on form modal', () => {
  cy.get('#closeLargeModal').click({ force: true });
});