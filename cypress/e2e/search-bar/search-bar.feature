@search-bar
Feature: Search Bar

  Scenario: Initial state
    Given the User has not interacted with the component
    Then the Search Bar shows the "Looking for something?" placeholder

  Scenario: User has entered less than the minimum characters
    Given the User has entered 2 or less characters
    Then the Dropdown is not shown

  Scenario: User enters the minimum characters to perform a search
    Given the User has entered 2 characters
    When the User enters the 3rd character
    Then the Dropdown is shown
    And the Product Deals are shown
    And the Matching Products List are shown

  Scenario: Search comes with no results
    When the User has searches for a non-existing product
    Then the Dropdown is not shown

  Scenario: Clearing the Search Term using the Remove Search Button
    Given the User has entered a matching Search Term
    And the Dropdown is shown
    When the User clicks the Remove Search Button
    Then the Search Bar is cleared
    And the Dropdown is not shown

  # Scenario: User selects a product
  #   Given the User has entered a matching Search Term
  #   And the Dropdown is shown
  #   When the User selects a product
  #   Then the Product Summary Component is shown
