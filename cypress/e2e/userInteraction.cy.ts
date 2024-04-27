import * as users from "@fixtures/users.json";

describe("register and login user from the homepage", () => {
  before(() => {
    cy.visit("/");
    cy.dismissConsentLayer(true);
    users.forEach((user) => {
      cy.registerNewUser(user);
      cy.logoutUser();
    });
  });

  it("does nothing", () => {});

  after(() => {
    users.forEach((user) => {
      cy.loginUser(user);
      cy.deleteUser();
    });
  });
});
