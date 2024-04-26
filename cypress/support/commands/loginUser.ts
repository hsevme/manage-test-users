import { User } from "@typings/user";
declare global {
  namespace Cypress {
    interface Chainable {
      loginUser;
    }
  }
}

/**
 * Log in a given test user, if it exists.
 *
 * Note: This command creates a session snapshot with the generic name <p>user session</p>.
 * If two login commands are called subsequently, the respective cookies
 * from the first call will be still valid and, therefore, no second login
 * will be performed.
 *
 * This is why the caller (i.e. you) has to make shure that the tests
 * do not depend on running two user sessions in parallel.
 * @param user The data of the test user as defined in <p>@typings/user</p>.
 *             This command uses e-mail address and password.
 */
const loginUser = (user: User) => {
  cy.session(`user session`, () => {
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
        cy.get("button[type=submit]")
          .should("contain.text", "Anmelden")
          .click();
      });
  });
};

Cypress.Commands.add("loginUser", loginUser);
