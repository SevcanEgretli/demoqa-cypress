import PracticeFormPage from '../pageObjects/PracticeFormPage';

beforeEach(() => {
  cy.fixture('formData').as('formData');
});


it('should fill and submit form, then verify modal', function () {
  const data = this.formData;

  PracticeFormPage.visit();
  PracticeFormPage.fillForm(data);
  PracticeFormPage.submit();
  PracticeFormPage.verifyModalValues(data);
});
