import * as users from "@fixtures/users.json";
import * as websites from "@fixtures/websites.json";

const website = websites[0];
const happyHippo = users[0];
const happyHackor = users[1];

describe("register and login user from the homepage", () => {
  // cy.session("testUser", () => {});

  beforeEach(() => {
    cy.visit(website.baseUrl);
    cy.dismissConsentLayer(true);
  });

  it.only("does nothing", () => {});

  it("can register a new user", () => {
    cy.registerNewUser(happyHackor);
  });

  it("can login a user", () => {
    cy.loginUser(happyHackor);
  });
});
