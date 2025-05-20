import PracticeFormPage from '../pageObjects/PracticeFormPage';

describe('Automation Practice Form - POM Version', () => {
  it('should fill and submit form, then verify modal', () => {
    PracticeFormPage.visit();
    PracticeFormPage.fillFirstName('Sevcan');
    PracticeFormPage.fillLastName('Egretli');
    PracticeFormPage.fillEmail('sevcan@example.com');
    PracticeFormPage.selectGender('Female');
    PracticeFormPage.fillMobile('1234567890');
    PracticeFormPage.setDateOfBirth('1990', 'May', '15');
    PracticeFormPage.selectSubject('Maths');
    PracticeFormPage.selectHobby('Sports');
    PracticeFormPage.uploadPicture('sample.png');
    PracticeFormPage.fillAddress('Berlin, Germany');
    PracticeFormPage.selectStateAndCity('NCR', 'Delhi');
    PracticeFormPage.submit();

    // Verification
    PracticeFormPage.verifyModalData('Sevcan Egretli');
    PracticeFormPage.verifyModalData('sevcan@example.com');
    PracticeFormPage.verifyModalData('Female');
    PracticeFormPage.verifyModalData('1234567890');
    PracticeFormPage.verifyModalData('15 May,1990');
    PracticeFormPage.verifyModalData('Maths');
    PracticeFormPage.verifyModalData('Sports');
    PracticeFormPage.verifyModalData('sample.png');
    PracticeFormPage.verifyModalData('Berlin, Germany');
    PracticeFormPage.verifyModalData('NCR Delhi');
  });
});
