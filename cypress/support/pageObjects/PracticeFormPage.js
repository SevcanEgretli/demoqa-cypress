// class PracticeFormPage {
//   visit() {
//     cy.visit('/automation-practice-form');
//   }

//   fillFirstName(name) {
//     cy.get('#firstName').type(name);
//   }

//   fillLastName(name) {
//     cy.get('#lastName').type(name);
//   }

//   fillEmail(email) {
//     cy.get('#userEmail').type(email);
//   }

//   selectGender(gender = 'Male') {
//     cy.contains('label', gender).click();
//   }

//   fillMobile(number) {
//     cy.get('#userNumber').type(number);
//   }

//   setDateOfBirth(year , month , day ) {
//     cy.get('#dateOfBirthInput').click();
//     cy.get('.react-datepicker__year-select').select(year);
//     cy.get('.react-datepicker__month-select').select(month);
//     cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
//   }

//   selectSubject(subject = 'Maths') {
//     cy.get('#subjectsInput').type(`${subject}{enter}`);
//   }

//   selectHobby(hobby = 'Sports') {
//     cy.contains('label', hobby).click();
//   }

//   uploadPicture(fileName = 'sample.jpg') {
//     cy.get('#uploadPicture').selectFile(`cypress/fixtures/${fileName}`);
//   }

//   fillAddress(address) {
//     cy.get('#currentAddress').type(address);
//   }

//   selectStateAndCity(state = 'NCR', city = 'Delhi') {
//   cy.get('#state').click(); 
//   cy.get('div[id^="react-select-3-option-"]').contains(state).click();

//   cy.get('#city').click();
//   cy.get('div[id^="react-select-4-option-"]').contains(city).click();
// }


//   submit() {
//     cy.get('#submit').click();
//   }

//   fillForm(data) {
//   this.fillFirstName(data.firstName);
//   this.fillLastName(data.lastName);
//   this.fillEmail(data.email);
//   this.selectGender(data.gender);
//   this.fillMobile(data.mobile);
//   this.setDateOfBirth(data.dob.year, data.dob.month, data.dob.day);
//   this.selectSubject(data.subject);
//   this.selectHobby(data.hobby);
//   this.uploadPicture(data.picture);
//   this.fillAddress(data.address);
//   this.selectStateAndCity(data.state, data.city);
// }

// verifyModalValues(data) {
//   const expectedValues = [
//     `${data.firstName} ${data.lastName}`,
//     data.email,
//     data.gender,
//     data.mobile,
//     `${data.dob.day} ${data.dob.month},${data.dob.year}`,
//     data.subject,
//     data.hobby,
//     data.picture,
//     data.address,
//     `${data.state} ${data.city}`
//   ];

//   expectedValues.forEach((value) => {
//     cy.get('.modal-content').should('contain', value);
//   });
// }

//   verifyModalData(value) {
//     cy.get('.modal-content').should('be.visible').contains(value);
//   }
// }

// export default new PracticeFormPage();
