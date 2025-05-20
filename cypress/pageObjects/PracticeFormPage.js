class PracticeFormPage {
  visit() {
    cy.visit('/automation-practice-form');
  }

  fillFirstName(name) {
    cy.get('#firstName').type(name);
  }

  fillLastName(name) {
    cy.get('#lastName').type(name);
  }

  fillEmail(email) {
    cy.get('#userEmail').type(email);
  }

  selectGender(gender = 'Male') {
    cy.contains('label', gender).click();
  }

  fillMobile(number) {
    cy.get('#userNumber').type(number);
  }

  setDateOfBirth(year , month , day ) {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(year);
    cy.get('.react-datepicker__month-select').select(month);
    cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
  }

  selectSubject(subject = 'Maths') {
    cy.get('#subjectsInput').type(`${subject}{enter}`);
  }

  selectHobby(hobby = 'Sports') {
    cy.contains('label', hobby).click();
  }

  uploadPicture(fileName = 'sample.jpg') {
    cy.get('#uploadPicture').selectFile(`cypress/fixtures/${fileName}`);
  }

  fillAddress(address) {
    cy.get('#currentAddress').type(address);
  }

  selectStateAndCity(state = 'NCR', city = 'Delhi') {
  cy.get('#state').click(); 
  cy.get('div[id^="react-select-3-option-"]').contains(state).click();

  cy.get('#city').click();
  cy.get('div[id^="react-select-4-option-"]').contains(city).click();
}


  submit() {
    cy.get('#submit').click();
  }

  verifyModalData(value) {
    cy.get('.modal-content').should('be.visible').contains(value);
  }
}

export default new PracticeFormPage();
