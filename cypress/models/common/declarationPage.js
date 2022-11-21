import { commonPageObject } from "./commonPageObject";

export const declarationPage = {
  checkConfirmationCheckBox() {
    cy.contains("I confirm I've read and understand the above declaration.").click();
    return this;
  },
  ...commonPageObject,
};
