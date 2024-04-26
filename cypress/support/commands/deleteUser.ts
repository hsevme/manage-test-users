import { User } from "@typings/user";
import * as website from "@fixtures/websites.json";

declare global {
  namespace Cypress {
    interface Chainable {
      deleteUser;
    }
  }
}

const deleteUser = (user: User) => {
  cy.visit(`${website.baseUrl}/kundenkonto/bestellungen`);

  cy.get("#account-delete-button")
    .should("contain.text", "Meine Daten")
    .click();
};

Cypress.Commands.add("deleteUser", deleteUser);
