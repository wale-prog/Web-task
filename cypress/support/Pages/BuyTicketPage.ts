class BuyTicketPage {
  getReturnTcket() {
    return cy.get("#product_550");
  }
  enterFirstName(firstname: string) {
    cy.get("#travname").type(firstname);
  }
  enterLastname(lastname: string) {
    cy.get("#travlastname").type(lastname);
  }
  enterNote(note: string) {
    cy.get("#order_comments").type(note);
  }
  enterDateOfBirth(DoB: string) {
    cy.get("#dob").type(DoB);
  }

  enterPassengerDetails(firstName: string, lastName: string, note: string) {
    this.enterFirstName(firstName);
    this.enterLastname(lastName);
    this.enterNote(note);
  }

  selectDateOfBirth(birthYear: string, birthMonth: string, birthDay: number) {
    cy.get("#dob").click();
    cy.get(".ui-datepicker-year").select(birthYear);
    cy.get(".ui-datepicker-month").select(birthMonth);
    cy.get(".ui-state-default")
      .eq(birthDay - 1)
      .click();
  }
  selectSex() {
    cy.get("#sex_1").check({ force: true });
  }

  enterTravelDetails(
    fromCity: string,
    toCity: string,
    departOn: string,
    note: string
  ) {
    const [year, month, day] = [
      departOn.split("/")[0],
      departOn.split("/")[1],
      parseInt(departOn.split("/")[2], 10),
    ];

    cy.get("#fromcity").type(fromCity);
    cy.get("#tocity").type(toCity);

    cy.get("#departon").click();
    cy.get(".ui-datepicker-year").select(year);
    cy.get(".ui-datepicker-month").select(month);
    cy.get(".ui-state-default")
      .eq(day - 1)
      .click();
    cy.get("#notes").type(note);
    cy.get("#deliverymethod_1").check();
  }

  enterBillingDetails(
    billingName: string,
    phoneNumber: string,
    email: string,
    country: string,
    address1: string,
    city: string,
    county: string,
    postcode: string
  ) {
    cy.get("#billname").type(billingName);
    cy.get("#billing_phone").type(phoneNumber);
    cy.get("#billing_email").type(email);
    cy.get("#billing_country").select(country, { force: true });
    cy.get("#billing_address_1").type(address1);
    cy.get("#billing_city").type(city);
    cy.get("#billing_state").type(county);
    cy.get("#billing_postcode").type(postcode);
  }

  selectDebitAndCreditCard() {
    cy.get("#payment_method_yith-stripe").check();
  }

  enterCardDetails(cardNumber: string, expDate: string, cvc: string) {
    const cardNumberFrame = cy
      .get("#yith-stripe-card-number > div > iframe")
      .its("0.contentDocument.body")
      .as("getCardNumberFrame");
    cy.get("@getCardNumberFrame").should("be.visible").then(cy.wrap);

    const expDateFrame = cy
      .get("#yith-stripe-card-expiry > div > iframe")
      .its("0.contentDocument.body")
      .as("getExpDateFrame");
    cy.get("@getExpDateFrame").should("be.visible").then(cy.wrap);

    const cvcFrame = cy
      .get("#yith-stripe-card-cvc > div > iframe")
      .its("0.contentDocument.body")
      .as("getCVCFrame");
    cy.get("@getCVCFrame").should("be.visible").then(cy.wrap);

    cy.wait(5000);
    cardNumberFrame.find('input[name="cardnumber"]').type(cardNumber);
    expDateFrame.find('input[name="exp-date"]').type(expDate)
    cvcFrame.find('input[name="cvc"]').type(cvc)

    cy.get('#place_order').click()
  }

  getCardErrorMessage() {
     return cy.get('.woocommerce-error > li')
  }
}
export default BuyTicketPage;
