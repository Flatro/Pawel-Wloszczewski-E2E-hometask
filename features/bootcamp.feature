Feature: Bootcamp E2E

	Background:
		Given I am on the home page
		When I see that promo banner appears
		Then I can close the promo banner

	Scenario: Search bar

		Given I can enter keyword in search bar
		When I can click on search button
		Then I see at least one item

	Scenario: Internet shop logo button

		Given I can open Todays Best Deals
		When I can click on shop logo
		Then I am back on the main page