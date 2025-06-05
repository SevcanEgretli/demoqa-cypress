class PracticeForm {
  firstNameField() {
    return cy.get('#firstName');
  }

  lastNameField() {
    return cy.get('#lastName');
  }

  emailField() {
    return cy.get('#userEmail');
  }

  genderRadio(gender) {
    return cy.contains('label.custom-control-label', gender);
  }

  mobileField() {
    return cy.get('#userNumber');
  }

  dateOfBirthInput() {
    return cy.get('#dateOfBirthInput');
  }

  subjectInput() {
    return cy.get('.subjects-auto-complete__input input');
  }

  hobbyCheckbox(hobby) {
    return cy.contains('label.custom-control-label', hobby);
  }

  uploadPictureInput() {
    return cy.get('#uploadPicture');
  }

  currentAddressField() {
    return cy.get('#currentAddress');
  }

  stateDropdown() {
    return cy.get('#state');
  }

  selectStateOption(state) {
    return cy.contains('#stateCity-wrapper div', state);
  }

  cityDropdown() {
    return cy.get('#city');
  }

  selectCityOption(city) {
    return cy.contains('#stateCity-wrapper div', city);
  }

  submitButton() {
    return cy.get('#submit');
  }
}

export default new PracticeForm();
