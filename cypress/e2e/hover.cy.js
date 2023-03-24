


describe ('interacting with tables', () => {

    it('MouseHover', () => {

    
    cy.visit('https://demo.opencart.com/')

    
    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
    .should('not.be.visible')

    cy.get('.nav > :nth-child(1) > .dropdown-toggle')
    .trigger('mouseover').click()

    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
    .should('be.visible')
    })

    it('Right click', () => {
/* //Approach 1
    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    cy.get('.context-menu-one').trigger('contextmenu')
    cy.get('.context-menu-icon-copy > span').should('be.visible').click();
*/
    //Aproach 2
    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    cy.get('.context-menu-one').rightclick()
    cy.get('.context-menu-icon-copy > span').should('be.visible').click();

    })

    it.only('Double Click', () => {

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.wait(3000)
        cy.frameLoaded('#iframeResult') // load the frame
        
    })

})