/// <reference types="cypress" />

import type Details from '../fixtures/passengerDetails.json'

interface FixtureTypes {
  passengerDetails: typeof Details;
  travelDetail: typeof Details;
  billingDetail: typeof Details
}

declare global {
  namespace Cypress {
    interface Chainable {
      fixture<K extends keyof FixtureTypes> (
        fixtureName: K,
      ): Chainable<FixtureTypes[K]>;
    }
  }
}