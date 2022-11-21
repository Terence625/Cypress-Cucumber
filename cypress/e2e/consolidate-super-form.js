import { Given, When, Then, attach } from "@badeball/cypress-cucumber-preprocessor";
import { declarationPage } from "../models/common/declarationPage";
import { landingPage } from "../models/consolidateYourSuperForm/landingPage";
import { personalDetailPage } from "../models/consolidateYourSuperForm/personalDetailPage";
import { otherFundDetailPage } from "../models/consolidateYourSuperForm/otherFundDetailPage";
import { smsfFundDetailsPage } from "../models/consolidateYourSuperForm/smsfFundDetailPage";
import { submissionPage } from "../models/consolidateYourSuperForm/submissionPage";

const testData = require("../fixtures/testData/consolidateTestData.json");

Given("Launch consolidate your form", () => {
  cy.visit("consolidate-your-super-form#/");
});

When("take a screenshot of landing page and compare", () => {
  landingPage.comparePage("landing-page");
});

When("click on continue on Lets get started page", () => {
  landingPage.clickContinueBtn();
});

When("take a screenshot of personal detail page and compare", () => {
  personalDetailPage.comparePage("personal-detail-page");
});

When("enter personal details and continue", function () {
  personalDetailPage
    .inputFirstName(testData.firstName)
    .inputLastName(testData.lastName)
    .inputDOB(testData.dob)
    .inputMemberNumber(testData.dob)
    .inputPostcode(testData.postCode)
    .checkPrivacyBox()
    .clickContinueBtn();
});

When("take a screenshot of different super fund detail page and compare", () => {
  otherFundDetailPage.comparePage("different-super-fund-detail-page");
});

When("enter different super fund details and continue", () => {
  otherFundDetailPage
    .inputFundName("amp")
    .selectFirstFundOption()
    .inputMemberNumber("123456")
    .selectTransferEntireOption()
    .clickContinueBtn();
});

When("enter SMSF super fund details and continue", () => {
  otherFundDetailPage
    .inputABNnumber("15740243977")
    .clickESAlistInput()
    .selectESAlistOption()
    .selectTransferEntireOption()
    .clickContinueBtn();
});

When("select SMSF super fund toggle option", () => {
  otherFundDetailPage.selectToggle("Self-managed super fund");
});

When("take a screenshot of declaration page and compare", () => {
  declarationPage.comparePage("declaration-page");
});

When("submit the form", () => {
  cy.intercept(Cypress.env("baseApiUrl") + "accounts/v2/Accumulation/*/rollovers/str", (req) => {
    req.reply({ fixture: "staticResponse/successfulSubmission.json", statusCode: 201 });
  }).as("submitConsolidateAPI");
  declarationPage.checkConfirmationCheckBox().clickSubmitBtn();
  cy.wait("@submitConsolidateAPI");
});

Then("take a screenshot of submission successful page and compare", () => {
  submissionPage.comparePage("submission-successful-page");
});

When("take a screenshot of SMSF super fund fund detail page and compare", () => {
  smsfFundDetailsPage.comparePage("SMSF-super-fund-detail-page");
});

Then("I should be seeing successful message for submission", () => {
  submissionPage.checkSucessMessagePresent();
});
