Feature: Reqres Users API Tests

  Scenario: Get single user by ID
    When I send a GET request to "/api/users/2"
    Then the response status code should be 200
    And the response body should contain user with id 2
    Then the response body should match expected user details

  Scenario: Validate user list on page 2
    When I send a GET request to "/api/users?page=2"
    Then the response status code should be 200
    And the response body should contain metadata for page 2
    And the response should contain exactly 6 users
    And each user in the list should have id, email, first_name, last_name, avatar
    And the support section should contain url and text

  Scenario: Successfully create a new user
    When I send a POST request to "/api/users" with the following body and headers:
      | name     | morpheus     |
      | job      | leader       |
      | x-api-key| reqres-free-v1 |
    Then the response status code should be 201
    And the response body should contain the name "morpheus" and job "leader"
    And the response body should contain an id and createdAt timestamp