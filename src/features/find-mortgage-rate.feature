Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  @Test
  Scenario: Find mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    And I navigate to the "Mortgage Rates" sub menu
    When I search for a Nationwide mortgage using the following inputs
      | nationwide_mortgage | type            | property_value | mortgage_amount | term |
      | No                  | Changing lender | 300000         | 150000          | 30   |
    When I filter the results using the following inputs
      | mortgage_type | product_fee |
      | Fixed         | With fee    |
    Then I check the results return the following products
      | 2 yr Fixed | 3 yr Fixed | 5 yr Fixed | 10 yr Fixed |
    When I select More info and apply link of "5 yr Fixed" mortgage product  
    And I apply for mortgage
    Then I should be navigated to remortgage application page containing "ready-to-apply" in URL
    And I check the heading of the page to be "Start your remortgage application"



