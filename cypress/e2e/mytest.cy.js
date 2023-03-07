

describe('template spec', () => {
  it('test 1', () => {
    
    const customTimeOut = {timeout: 120000}
    

     cy.visit("https://www.google.com/")
    
    
    cy.get('.gLFyf', customTimeOut).type("Winona") // search bar
    cy.contains('.wM6W7d', 'Winona Ryder').click();// Click found
    cy.get('.NQyKp:nth-child(2)', customTimeOut ).click(); // Overview tab
    cy.get('.NQyKp:nth-child(3)', customTimeOut).click(); // Movies and Tv show tab
    cy.get('.NQyKp:nth-child(4)', customTimeOut).click(); // relationship 
    cy.get('.NQyKp:nth-child(5)', customTimeOut).click(); // videos

                                        


    




      // cy.get('.btn-primary', customTimeOut)
      // .should('have.class', 'btn-large', )
      // .should('have.class', 'btn-block')
      // .contains('Ok')
      // .click();

      // cy.get('.profile', customTimeOut)
      // .click();

      // cy.get('.form-group:nth-child(2)')
      // .click();

      // cy.contains('span.text', 'English') 
      // .click();

    // it('test 2', () => {
    
      
    
    //    cy.visit("https://www.facebook.com/")
    //    cy.title().should('eq','Facebook')
  })
  })
   
  