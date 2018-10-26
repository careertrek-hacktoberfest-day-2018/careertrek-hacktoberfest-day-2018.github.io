Feature: Information on the home page must be correct

  Scenario: Site title name is set as Careertrek Hacktoberfest Day 2018
    When I visit homepage
    Then Site title name is "CareerTrek Hacktoberfest Day 2018"
