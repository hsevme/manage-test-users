export {};
declare global {
  namespace Cypress {
    interface Chainable {
      logoutUser;
    }
  }
}

const logoutUser = () => {
  cy.get("a[href='/kundenkonto/bestellungen']")
    .should("be.visible")
    // TODO: find better solution to this
    .eq(0) // hsev: a[href='/kundenkonto/bestellungen'] is ambigious because there is an identical button in the burger menu => this only works on desktop resolutions
    .click({ force: true });

  cy.get("a[href='/abmeldung'")
    .should("have.text", "Abmelden")
    .click({ force: true });
};

Cypress.Commands.add("logoutUser", logoutUser);
