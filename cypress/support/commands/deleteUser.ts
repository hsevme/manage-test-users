export {};
declare global {
  namespace Cypress {
    interface Chainable {
      deleteUser;
    }
  }
}

/**
 * Delete the user that is currently logged in.
 */
const deleteUser = () => {
  cy.visit("/kundenkonto/meine-daten");

  cy.get("#account-delete-button")
    .should("contain.text", "Kundenkonto löschen")
    .click();

  cy.get(".delete-action--submit")
    .should("contain.text", "Löschung bestätigen")
    .click();

  cy.get(".message-dialog__button")
    .should("contain.text", "Verstanden")
    .click();
};

Cypress.Commands.add("deleteUser", deleteUser);
