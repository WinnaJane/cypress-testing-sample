

describe ('Handling childs', () => {

    it.skip('approach 1 ' , () => {

        cy.visit('https://the-internet.herokuapp.com/windows')
        // remove attribute so it will not open on another window
        cy.get('.example > a ').invoke('removeAttr', 'target') // clicking on link
        .click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        // operations

        cy.go('back'); //back to parent tab




    })
    it('approach 2 ' , () => {

        cy.visit('https://the-internet.herokuapp.com/windows') // parent tab
        
        cy.get('.example > a').then((e) => {
            let url=e.prop('href');

            cy.visit(url)
        })
    

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        // operations

        cy.go('back'); //back to parent tab




    })
})