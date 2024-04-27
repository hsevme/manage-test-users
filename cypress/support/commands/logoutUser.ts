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
 */
const logoutUser = () => {
  cy.visit("/abmeldung");
};

Cypress.Commands.add("logoutUser", logoutUser);
