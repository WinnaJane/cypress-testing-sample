import 'cypress-iframe'


describe ('IFrames', () => {

    it.skip('Iframe 1', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        
        iframe.clear().type("Welcome Winonna Jane {ctrl+a}");

        cy.get('button[aria-label="Bold"]').click();

    })

    it('approach 2 using custom command', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear()
        .type("Welcome Winonna Jane {ctrl+a}");

        cy.get('button[aria-label="Bold"]').click();

    })

    it.only('approach 3 by using cypress-iframe plugin ', () => {
        cy.wait(5000)
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr') // load the frame

        cy.getIframe('#mce_0_ifr').clear().type('Welcome Winonna {ctrl+a}')
        



    })
})