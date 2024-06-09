/// <reference types="Cypress" />

import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';
import LandingPage from '../../support/Pages/LandingPage';
import BuyTicketPage from '../../support/Pages/BuyTicketPage';
import { FixtureTypes } from 'cypress/support';
let landingPage: LandingPage
let buyTicketPage: BuyTicketPage
let data: FixtureTypes



Before(function() {
    cy.fixture('passengerDetails').then(function (cred) {
        data = cred
        // data.passengerDetails
    })
    landingPage = new LandingPage();
    buyTicketPage = new BuyTicketPage();
})

Given(`User navigate to the {string}`, (url: string) => {
    cy.visit(url)
    cy.title().should('eq', 'Dummy Ticket - Original tickets but Dummy')
    
});

Given(`User is on the landing page`, () => {  
    landingPage.getNavbarText().should('have.text', 'HomeBuy TicketContact')    
});

Given(`User click buy ticket link on the navigation bar and confirms dummy return ticket is checked`, () => {
    landingPage.clickBuyTicketLink()
    buyTicketPage.getReturnTcket().should('be.checked')
});

Given(`user fills the passenger details`, () => {
    let passenger = data.passengerDetails
    buyTicketPage.enterPassengerDetails(passenger.firstName, passenger.lastName, passenger.orderNote)
    buyTicketPage.selectDateOfBirth('1964', 'Sep', 2)
    buyTicketPage.selectSex()
});

Given(`user fills the travel details`, () => {
    let details = data.travelDetail
    buyTicketPage.enterTravelDetails(details.fromCity, details.toCity, details.departureDate, details.additionalInfo)
    
});

Given(`user fills the billing details`, () => {
    let person = data.billingDetail
    buyTicketPage.enterBillingDetails(
        person.billingName, 
        person.phone, 
        person.emailAddress, 
        person.country, 
        person.streetAddress, 
        person.city, 
        person.county, 
        person.postcode
    )
    cy.wait(10000)
    
});

Given(`user select debit and credit card option`, () => {
    
});

When(`user fill the card details and click place order`, () => {
    
});

Then(`an error {string} is displayed`, (arg0) => {
    
});