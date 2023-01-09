const {
  Before,
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import {
  headerTabletInput,
  headerTabletDropdown,
  headerTabletDropdownSimpleProducts,
  headerTabletDropdownDetailedProducts,
  headerTabletButtonClose,
} from "../pages/search-bar";
Before(() => {
  cy.visit("/");
});

Given("the User has not interacted with the component", () => {});
Then("the Search Bar shows the {string} placeholder", (placeholder) => {
  cy.get(headerTabletInput).should("have.attr", "placeholder", placeholder);
});
Given("the User has entered 2 or less characters", () => {
  cy.get(headerTabletInput).type("sa");
});
Then("the Dropdown is not shown", () => {
  cy.get(headerTabletDropdown).should("not.exist");
});
Given("the User has entered 2 characters", () => {
  cy.get(headerTabletInput).type("sa");
});
When("the User enters the 3rd character", () => {
  cy.get(headerTabletInput).type("m");
});
Then("the Dropdown is shown", () => {
  cy.get(headerTabletDropdown).should("exist");
});
Then("the Product Deals are shown", () => {
  cy.get(headerTabletDropdownSimpleProducts).should("exist");
});
Then("the Matching Products List are shown", () => {
  cy.get(headerTabletDropdownDetailedProducts).should("exist");
});

Given("the User has searches for a non-existing product", () => {
  cy.get(headerTabletInput).type("sxsx");
});

Given("the User has entered a matching Search Term", () => {
  cy.get(headerTabletInput).type("sam");
});
When("the User clicks the Remove Search Button", () => {
  cy.get(headerTabletButtonClose).click();
});
Then("the Search Bar is cleared",()=>{})