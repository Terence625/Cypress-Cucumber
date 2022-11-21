import { commonPageObject } from "../common/commonPageObject";

export const personalDetailPage = {
  ...commonPageObject,
  
  firstNameInputBox: "#firstName",
  lastNameInputBox: "#lastName",
  dobInputBox: "#DOB",
  memberNumberInputBox: "#memberNumber",
  postcodeInputBox: "#postcode",
  checkBox: "input[name='privacy']",

  inputFirstName(firstName) {
    cy.get(this.firstNameInputBox).type(firstName);
    return this;
  },

  inputLastName(lastName) {
    cy.get(this.lastNameInputBox).type(lastName);
    return this;
  },

  inputDOB(dob) {
    cy.get(this.dobInputBox).type(dob);
    return this;
  },

  inputMemberNumber(memberNumber) {
    cy.get(this.memberNumberInputBox).type(memberNumber);
    return this;
  },

  inputPostcode(postcode) {
    cy.get(this.postcodeInputBox).type(postcode);
    return this;
  },

  checkPrivacyBox() {
    cy.get(this.checkBox).click();
    return this;
  },
};
