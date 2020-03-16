Feature: checkbox user journeys

To run feature:
npm test config/wdio.conf.js -- --spec 'features/checkbox.feature'

Scenario: The one where I tick the first checkbox
    Given I am on the "checkbox" page
    When I click on the "first_checkbox" element
    Then I expect the element "first_checkbox" to be selected
        And I expect the element "second_checkbox" to be selected

Scenario: The one where I un-tick the second checkbox
    Given I am on the "checkbox" page
    When I click on the "second_checkbox" element
    Then I expect the element "first_checkbox" to not be selected
        And I expect the element "second_checkbox" to not be selected

Scenario: The one where I tick both checkboxes multiple times
    Given I am on the "checkbox" page
    When I click on the "first_checkbox" element 5 times
        And I click on the "second_checkbox" element 9 times
    Then I expect the element "first_checkbox" to be selected
        And I expect the element "second_checkbox" to not be selected