Feature: checkbox user journeys

To run feature:
npm test config/wdio.conf.js -- --spec 'features/checkbox.feature'

Scenario: The one where I tick the first checkbox
    Given I am on the "checkbox" page
    When I click on the "first_checkbox" element
    Then I expect the element "first_checkbox" to be selected
        And I expect the element "second_checkbox" to be selected