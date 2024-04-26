export {};
declare global {
  namespace Cypress {
    interface Chainable {
      logoutUser;
    }
  }
}

/**
 * Log out the current user, if one is logged in.
 *
 * Note: This command operates on a session snapshot with the generic name <p>user session</p>.
 * The snapshot is supposed to be created by a login command first.
 * Only after logging out with this command, you can login again.
 * The <p>user sesseion</p> will be cleared and can then be reused.
 *
 * This is why the caller (i.e. you) has to make shure that the tests
 * do not depend on running two user sessions in parallel.
 */
const logoutUser = () => {
  cy.session("user session", () => {
    cy.get("a[href='/kundenkonto/bestellungen']")
      .should("be.visible")
      // TODO: find better solution to this
      .eq(0) // hsev: a[href='/kundenkonto/bestellungen'] is ambigious because there is an identical button in the burger menu => this only works on desktop resolutions
      .click({ force: true });

    cy.get("a[href='/abmeldung'")
      .should("have.text", "Abmelden")
      .click({ force: true });
  }).clear();
};

Cypress.Commands.add("logoutUser", logoutUser);
