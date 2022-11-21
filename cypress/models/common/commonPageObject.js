export const commonPageObject = {
  toggleBox: "div[class='toggle__Vrhsn']",

  clickContinueBtn() {
    cy.get("button").contains("Continue").click();
  },

  clickSubmitBtn() {
    cy.get("button").contains("Submit").click();
  },

  selectToggle(toggleText) {
    cy.get(this.toggleBox).contains(toggleText).click();
    return this;
  },

  comparePage(pageName) {
    cy.waitForStableDOM();
    cy.matchImageSnapshot(pageName);
    return this;
  },
};
