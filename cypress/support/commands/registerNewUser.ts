import { User } from "@typings/user";
declare global {
  namespace Cypress {
    interface Chainable {
      registerNewUser;
    }
  }
}

/**
 * Sign up the given test user.
 * @param user The data of the test user as defined in <p>@typings/user</p>.
 *             This command uses first name, last name, e-mail address and password.
 */
const registerNewUser = (user: User) => {
  cy.visit("/kundenkonto/registrierung");

  cy.get("#firstname").type(user.firstname);
  cy.get("#lastname").type(user.lastname);
  cy.get("#email").type(user.mail);
  cy.get("#password").type(user.password);

  cy.get(".form-element__button").should("have.text", "Neu anmelden").click();

  cy.get(".confirmation-content__link")
    .should("have.text", "Zum Kundenkonto")
    .click();
};

Cypress.Commands.add("registerNewUser", registerNewUser);
