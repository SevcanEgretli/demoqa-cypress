import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
let response;

When("I send a GET request to {string}", (endpoint) => {
  cy.request(`https://reqres.in${endpoint}`).then((res) => {
    response = res;
  });
});

When("I list users on page {int}", (page) => {
  cy.request({
    method: "GET",
    url: `https://reqres.in/api/users?page=${page}`,
    headers: {
      "x-api-key": "reqres-free-v1"
    }
  }).then((res) => {
    response = res;
  });
});


Then("the response status code should be {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then("the response body should contain user with id {int}", (id) => {
  expect(response.body.data).to.have.property("id", id);
});

Then("the response should contain a list of users", () => {
  expect(response.body.data).to.be.an("array").and.have.length.greaterThan(0);
});

Then('the response body should match expected user details', () => {
  const expectedUser = {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  };

  const expectedSupport = {
    url: 'https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral',
    text: 'Tired of writing endless social media content? Let Content Caddy generate it for you.'
  };

  expect(response.body).to.have.property('data');
  expect(response.body.data).to.deep.equal(expectedUser);

  expect(response.body).to.have.property('support');
  expect(response.body.support).to.deep.equal(expectedSupport);
});


Then("the response body should contain metadata for page 2", () => {
  const metadata = response.body;
  expect(metadata.page).to.eq(2);
  expect(metadata.per_page).to.eq(6);
  expect(metadata.total).to.eq(12);
  expect(metadata.total_pages).to.eq(2);
});

Then("the response should contain exactly {int} users", (count) => {
  expect(response.body.data).to.have.length(count);
});

Then("each user in the list should have id, email, first_name, last_name, avatar", () => {
  response.body.data.forEach((user) => {
    expect(user).to.have.all.keys("id", "email", "first_name", "last_name", "avatar");
    expect(user.email).to.include("@");
    expect(user.avatar).to.match(/^https:\/\/.*\.jpg$/);
  });
});

Then("the support section should contain url and text", () => {
  expect(response.body.support).to.have.property("url").and.to.include("contentcaddy.io");
  expect(response.body.support).to.have.property("text").and.to.include("Content Caddy");
});

When('I send a POST request to {string} with the following body and headers:', (endpoint, dataTable) => {
  const rawData = dataTable.rowsHash();
  const headers = {
    'x-api-key': rawData['x-api-key']
  };
  const { name, job } = rawData;
  const body = { name, job };

  cy.request({
    method: 'POST',
    url: `https://reqres.in${endpoint}`,
    headers,
    body,
  }).then((res) => {
    response = res;
  });
});

Then('the response body should contain the name {string} and job {string}', (name, job) => {
  expect(response.body).to.include({
    name,
    job
  });
});

Then('the response body should contain an id and createdAt timestamp', () => {
  expect(response.body).to.have.property('id').and.to.match(/^\d+$/);
  expect(response.body).to.have.property('createdAt').and.to.match(/^\d{4}-\d{2}-\d{2}T/); // ISO timestamp
});