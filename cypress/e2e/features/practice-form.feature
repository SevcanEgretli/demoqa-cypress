Feature: Practice Form Submission
    As a user
    I want to fill out and submit the practice form
    So that I can verify the form submission works correctly

    Background:
        Given I am on the practice form page

    Scenario: Submit practice form with all fields
        When I fill in the personal information
            | firstName | lastName | email                | gender | mobile     |
            | John      | Doe      | john.doe@example.com | Male   | 1234567890 |
        And I select the date of birth as "15 January 1990"
        And I select the subjects "Computer Science" and "Maths"
        And I select the hobbies "Sports" and "Reading"
        And I upload a picture "sample.png"
        And I fill in the address "123 Test Street, Test City, 12345"
        And I select the state "NCR" and city "Delhi"
        And I submit the form
        Then I should see the submitted data in the modal
            | field          | value                             |
            | Student Name   | John Doe                          |
            | Student Email  | john.doe@example.com              |
            | Gender         | Male                              |
            | Mobile         | 1234567890                        |
            | Date of Birth  | 15 January,1990                   |
            | Subjects       | Computer Science, Maths           |
            | Hobbies        | Sports, Reading                   |
            | Picture        | sample.png                        |
            | Address        | 123 Test Street, Test City, 12345 |
            | State and City | NCR Delhi                         |
        Then I click the close button on form modal



    Scenario: Show validation on required fields when submitting empty for
        When I click the submit button without filling any fields
        Then I should see validation warnings on required fields


    Scenario: Submit practice form with only mandatory fields
        When I fill in the personal information
            | firstName | lastName | email         | gender | mobile     |
            | Hello     | Test     | test@test.com | Female | 0028374179 |
        And I select the date of birth as "17 March 2003"
        And I submit the form
        Then I should see the submitted data in the modal
            | field         | value         |
            | Student Name  | Hello Test    |
            | Student Email | test@test.com |
            | Gender        | Female        |
            | Mobile        | 0028374179    |
            | Date of Birth | 17 March,2003 |