describe('Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com/')
  })

  it('should search for "A Man Called Ove"', () => {
    cy.get('#twotabsearchtextbox').type('A Man Called Ove');
    cy.get('#nav-search-submit-button').click();
    cy.title().should('include', 'Amazon.com : A Man Called Ove');
    cy.get('h2 > a')
      .contains('A Man Called Ove')
      .should('be.visible');
  });

  it('should search for "A Man Called Ove" and verify the author name', () => {
    cy.get('#twotabsearchtextbox').type('A Man Called Ove novel');
    cy.get('#nav-search-submit-button').click();
    cy.get('h2 > a')
      .contains('A Man Called Ove')
      .should('be.visible')
      .click();
    cy.get('.author > a')
      .should('be.visible')
      .should('have.text', 'Fredrik BackmanJ. K. SimmonsSimon & Schuster Audio');
  });


  it('Should navigate to Today\'s Deals page', () => {
    cy.get("a[class=\"nav-a  \"]").click;
    cy.title().should('include', "Amazon.com. Spend less. Smile more.");
  });


  it('should navigate to the login page', () => {
    cy.get('#nav-link-accountList')
      .click()
    cy.get('#ap_email')
      .should('be.visible')
  })





  
});
