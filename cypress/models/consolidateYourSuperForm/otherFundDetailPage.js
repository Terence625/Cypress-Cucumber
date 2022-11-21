import { commonPageObject } from "../common/commonPageObject";

export const otherFundDetailPage = {
  ...commonPageObject,
  fundNameInputBox: "#fundName",
  firstFundOption: "#fundName-option-0",
  memberNumberInputBox: "#memberNumber",
  transferEntireOption: "input[value='transferEntireOption']",
  abnInputBox: "#ABN",
  esaListInput: "#ESA",
  esaListOption: "li[data-value='0']",

  inputFundName(fundName) {
    cy.get(this.fundNameInputBox).type(fundName);
    return this;
  },

  selectFirstFundOption() {
    cy.get(this.firstFundOption, { timeout: 20000 }).click();
    return this;
  },

  inputMemberNumber(memberNumber) {
    cy.get(this.memberNumberInputBox).type(memberNumber);
    return this;
  },

  selectTransferEntireOption() {
    cy.get(this.transferEntireOption).click();
    return this;
  },

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
