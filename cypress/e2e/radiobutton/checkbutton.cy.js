///<reference types="Cypress" />
import { slowCypressDown } from "cypress-slow-down"

slowCypressDown()

describe("check UI elements", ()=>{

    const customTimeOut = {timeout: 120000} 

    it.skip("checking radio buttons", ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation", customTimeOut)

        cy.get("input#male").should('be.visible')// male button visibility
        cy.get("input#female").should('be.visible') // female button visibility
        
        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

    })
})

    
    it.skip("checking check boxes", ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation", customTimeOut)

        cy.get("input#monday").should('be.visible')// male button visibility
        cy.get("input#tuesday").should('be.visible') // female button visibility
        
        //selecting radio buttons // same with radio syntax
        cy.get("input#monday").check().should('be.checked')
        cy.get("input#tuesday").should('not.be.checked')

    // //     //selecting all checkbox elements
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
        
       
     })

    it.skip("interacting dropdowns", ()=>{ 

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('India')
        .should('have.value', 'India')


    it.skip("interacting dropdowns test 2", ()=>{ 

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('input.select2-search__field').type('Poland').type('{enter}')
            
        cy.get('#traveltype_2').click()

        cy.get('#sex_2').check().should('be.checked')
        cy.get('#sex_1').should('not.be.checked')
    })

    it.skip("interacting dropdowns test 3", ()=>{

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Philippines').type('{enter}')

    })

    it("interacting with dynamic dropdown", () => {

        cy.visit('https://www.google.com')
        cy.get("input[name='q']").type('cypress automation')
        cy.wait(3000)
         cy.get('div.wM6W7d>span').should('have.length', '12')
        cy.get('div.wM6W7d>span').each(($el, index, $list) =>{
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
        })
        cy.get("input[name='q']").should('have.value', 'cypress automation tool')
    })

})
