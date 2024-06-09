/// <reference types="Cypress" />

import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';
import LandingPage from '../../support/Pages/LandingPage';
import BuyTicketPage from '../../support/Pages/BuyTicketPage';

let landingPage: LandingPage
let buyTicketPage: BuyTicketPage;
Before(function() {
    cy.fixture('passengerDetails').then(function (data) {
        this.data = data;
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
    
});

Given(`user fills the travel details`, () => {
    
});

Given(`user fills the billing details`, () => {
    
});

Given(`user select debit and credit card option`, () => {
    
});

When(`user fill the card details and click place order`, () => {
    
});

Then(`an error {string} is displayed`, (arg0) => {
    
});