Feature: Information on the home page must be correct

  Scenario: Address must be shown
    Given I am on the homepage
    Then I can see "Fujigaoka"

  Scenario: NG words must not be shown
    Given I am on the homepage
    Then I cannot see "unwelcomed"
    Then I cannot see "uninvited"

  Scenario: The title of this event must be shown
    Given I am on the homepage
    Then I can see "CareerTrek Hacktoberfest Day 2018"
