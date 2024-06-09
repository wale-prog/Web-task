class BuyTicketPage {

  getReturnTcket() {
    return cy.get('#product_550')
  }
  enterFirstName(firstname: string) {
    cy.get('#travname').type(firstname);
  }
  enterLastname(lastname: string) {
    cy.get('#travlastname').type(lastname)
  }
  enterNote(note: string) {
    cy.get('#order_comments').type(note)
  }
  enterDateOfBirth(DoB: string) {
    cy.get('#dob').type(DoB)
  }

  enterPassengerDetails(firstName:string, lastName: string, note:string) {
    this.enterFirstName(firstName);
    this.enterLastname(lastName);
    this.enterNote(note);
  }

  selectDateOfBirth(birthYear: string, birthMonth: string, birthDay: number) {
    cy.get('#dob').click();
    cy.get('.ui-datepicker-year').select(birthYear)
    cy.get('.ui-datepicker-month').select(birthMonth)
    cy.get('.ui-state-default').eq(birthDay - 1).click()
  }
  selectSex() {
    cy.get('#sex_1').check({force: true})
  }



}
export default BuyTicketPage;