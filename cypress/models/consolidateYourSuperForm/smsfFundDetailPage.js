import { commonPageObject } from "../common/commonPageObject";

export const smsfFundDetailsPage = {
  ...commonPageObject,

  abnInputBox: "#ABN",
  esaListInput: "#ESA",
  esaListOption: "li[data-value='0']",


  inputABNnumber(abn) {
    cy.get(this.abnInputBox).type(abn);
    return this;
  },
  clickESAlistInput() {
    cy.get(this.esaListInput, { timeout: 10000 }).click();
    return this;
  },
  selectESAlistOption() {
    cy.get(this.esaListOption, { timeout: 10000 }).click();
    return this;
  },

};
