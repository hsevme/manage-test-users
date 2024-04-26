import * as users from "@fixtures/users.json";
import * as website from "@fixtures/websites.json";

const happyHippo = users[0];
const happyHackor = users[1];

describe("register and login user from the homepage", () => {
  before(() => {
    cy.visit(website.baseUrl);
    cy.dismissConsentLayer(true);
    users.forEach((user) => {
      cy.registerNewUser(user);
      cy.visit(website.baseUrl);
      cy.logoutUser();
      cy.visit(website.baseUrl);
    });
  });

  beforeEach(() => {
    cy.visit(website.baseUrl);
  });

  it.only("does nothing", () => {});

  it("can login a registered test user", () => {
    cy.loginUser(/* change if you want to log in another user*/ happyHackor);
  });

  it("can log in and log out a given user", () => {
    cy.loginUser(/* change if you want to log in another user*/ happyHackor);
    cy.logoutUser();
  });

  it("can create all given test users", () => {
    users.forEach((user) => {
      cy.registerNewUser(user);
      cy.logoutUser();
      cy.visit(website.baseUrl);
    });
  });

  it("can delete all given test users", () => {
    users.forEach((user) => {
      cy.loginUser(user);
      cy.deleteUser();
      cy.visit(website.baseUrl);
    });
  });

  after(() => {
    cy.visit(website.baseUrl);
    users.forEach((user) => {
      cy.loginUser(user);
      cy.deleteUser();
      cy.visit(website.baseUrl);
    });
  });
});
