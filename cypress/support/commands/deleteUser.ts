import { User } from "@typings/user";

declare global {
  namespace Cypress {
    interface Chainable {
      deleteUser;
    }
  }
}

const deleteUser = () => {
  cy.get("a[href='/kundenkonto/bestellungen'")
    // TODO: find better solution to this
    .eq(0) // hsev: a[href='/kundenkonto/bestellungen'] is ambigious because there is an identical button in the burger menu => this only works on desktop resolutions
    .should("be.visible")
    .click();

  cy.get("a[href='/kundenkonto/meine-daten'")
    // TODO: find better solution to this
    .eq(0) // hsev: a[href='/kundenkonto/meine-daten'] is ambigious because there is an identical button in the burger menu => this only works on desktop resolutions
    .should("have.text", "Meine Daten")
    .click();

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
