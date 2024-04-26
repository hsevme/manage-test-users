import { User } from "@typings/user";
declare global {
  namespace Cypress {
    interface Chainable {
      registerNewUser;
    }
  }
}

const registerNewUser = (user: User) => {
  cy.get("a[href='/kundenkonto/bestellungen']")
    .should("contain.text", "Mein Konto")
    .eq(0) // hsev: a[href='/kundenkonto/bestellungen'] is ambigious because there is an identical button in the burger menu
    .click();

  cy.get(".sign-up-hint__link").click();
  cy.get(".sign-up-dialog")
    .should("be.visible")
    .within(() => {
      cy.get("#sign-up-firstname").type(user.firstname);
      cy.get("#sign-up-lastname").type(user.lastname);
      cy.get("#sign-up-email").type(user.mail);
      cy.get("#sign-up-password").type(user.password);
      cy.get("button[type=submit]")
        .should("contain.text", "Neu Anmelden")
        .click();
    });
};

Cypress.Commands.add("registerNewUser", registerNewUser);
