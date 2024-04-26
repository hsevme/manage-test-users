export {};
declare global {
  namespace Cypress {
    interface Chainable {
      dismissConsentLayer;
    }
  }
}

/**
 * Dismiss the initial consent dialog and choose to give consent or not.
 * @param inDenial true: deny consent, false: give consent
 */
const dismissConsentLayer = (inDenial: boolean) => {
  cy.intercept("https://aggregator.service.usercentrics.eu/aggregate/de*").as(
    "requestToUsercentricsWhenSettingsButtonClicked"
  );

  cy.intercept(
    "https://consent-api.service.consent.usercentrics.eu/consent/uw/3"
  ).as("requestToUsercentricsWhenConsentDenied");

  cy.get("#usercentrics-root").shadow().as("consentLayer");

  if (inDenial) {
    cy.get("@consentLayer")
      .find("button[data-testid=uc-customize-anchor")
      .should("have.text", "Einstellungen")
      .click({ force: true });

    cy.wait("@requestToUsercentricsWhenSettingsButtonClicked");

    cy.get("@consentLayer")
      .find("button[data-testid='uc-save-button']")
      .click({ force: true });

    cy.wait("@requestToUsercentricsWhenConsentDenied");
  } else {
    cy.get("@consentLayer")
      .find("button[data-testid=uc-accept-all-button")
      .should("have.text", "Alles akzeptieren")
      .click({ force: true });
  }
};

Cypress.Commands.add("dismissConsentLayer", dismissConsentLayer);
