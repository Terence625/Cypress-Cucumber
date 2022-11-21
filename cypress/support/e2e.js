// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import "./commands";
// import "cypress-cucumber-attach-screenshots-to-failed-steps";
require("./commands");
import { addMatchImageSnapshotCommand } from "@simonsmith/cypress-image-snapshot/command";
import { registerCommand } from "cypress-wait-for-stable-dom";

registerCommand();
addMatchImageSnapshotCommand({
  customSnapshotsDir: "./cypress/snapshots",
  comparisonMethod: "ssim",
  //bezkrovny will downsample the image and perform fast (default), 
  //to with a higher accuracy, change it to { ssim: "fast" }
  customDiffConfig: { ssim: "bezkrovny" },
  failureThreshold: 0.01,
  failureThresholdType: "percent",
});
