Feature: Login user journeys

To run feature:
npm test config/wdio.conf.js -- --spec 'features/login.feature'

Scenario: The one where a registered customer sucsessfully logs in
    Given I am 
        | a registered customer |
        And I am on the "login" page
    When I attempt to login
    Then I expect to sucessfully login

Scenario: The one where a non-registered customer fails to logs in
    Given I am not
        | a registered customer |
        And I am on the "login" page
    When I attempt to login
    Then I expect to unsucessfully login
