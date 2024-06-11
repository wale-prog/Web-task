class LandingPage {

  getNavbarText() {
    
    return cy.get('.nav-item-child.ffb-ark-first-level-menu ')
  }
  clickBuyTicketLink() {
    cy.get('a.nav-item-child.ffb-ark-first-level-menu').eq(1).click()
  }
  // clickBuyTicketLink(){

  // }
}
export default LandingPage;