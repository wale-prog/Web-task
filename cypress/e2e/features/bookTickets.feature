Feature: Buying a ticket on the site then paying by card and verifying that the test card
will be rejected. Verify the error message.

Background: Navigate to the ticket booking website
  Given User navigate to the "https://www.dummyticket.com"

Scenario: Buying a ticket on the site, then verify card reject error message
  Given User is on the landing page
  And User click buy ticket link on the navigation bar and confirms dummy return ticket is checked
  And user fills the passenger details
  And user fills the travel details
  And user fills the billing details
  And user select debit and credit card option
  When user fill the card details and click place order
  Then an error "An error occurred while processing the card. (The card has been declined. Please, contact your card issuer for more information.)" is displayed 