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
 * Note: This command is wrapped with <p>cy.session()</p>.
 * @param user The data of the test user as defined in <p>@typings/user</p>.
 *             This command uses e-mail address and password.
 */
const loginUser = (user: User) => {
  cy.session(
    `${user.mail} session`,
    () => {
      cy.visit("/kundenkonto/bestellungen");
      cy.dismissConsentLayer(true);
      cy.get("#email").type(user.mail);
      cy.get("#password").type(user.password);
      cy.get("#formLogin")
        .find("button")
        .should("have.text", "Anmelden")
        .click();
    },
    {
      validate() {
        // hsev: this is super hacky and works only for wide desktop viewports
        cy.get(".header-item--customer > .header-item__link").should(
          "contain.text",
          `${user.firstname}`
        );
      },
    }
  );
};

Cypress.Commands.add("loginUser", loginUser);
