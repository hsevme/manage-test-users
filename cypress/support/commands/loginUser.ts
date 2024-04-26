import { User } from "@typings/user";
declare global {
  namespace Cypress {
    interface Chainable {
      loginUser;
    }
  }
}

const loginUser = (user: User) => {
  cy.get("a[href='/kundenkonto/bestellungen']")
    .should("contain.text", "Mein Konto")
    // TODO: find better solution to this
    .eq(0) // hsev: a[href='/kundenkonto/bestellungen'] is ambigious because there is an identical button in the burger menu => this only works on desktop resolutions
    .click();

  cy.get(".log-in-dialog")
    .should("be.visible")
    .within(() => {
      cy.get("#log-in-email").type(user.mail);
      cy.get("#log-in-password").type(user.password);
      cy.get("button[type=submit]").should("contain.text", "Anmelden").click();
    });
};

Cypress.Commands.add("loginUser", loginUser);
