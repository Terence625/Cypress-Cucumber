import { commonPageObject } from "../common/commonPageObject";

export const submissionPage = {
  ...commonPageObject,

  expectedSuccessMessage: "We have successfully received your consolidation request.",
  submitConfirmation: "p[class*='message']",

  checkSucessMessagePresent() {
    cy.get(this.submitConfirmation).contains(this.expectedSuccessMessage);
    return this;
  },
};
