///<reference types="Cypress" />
import { slowCypressDown } from "cypress-slow-down"

slowCypressDown()

describe('Alerts', () => {

    const customTimeOut = {customTimeOut: 100000}

    it('OK button', () => {
        // 1 Javascript Alert: OK button

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts', customTimeOut)
    cy.get("button[onclick='jsAlert()']").click()

    cy.on('window:alert', (a) => {
        expect(a).to.contains('I am a JS Alert')
    })
        // alert window will automatically closed by cyperss

        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

         // 2 Javascipt Confirm Alert: It will have OK and cancel button

         it('Confirm button-OK', () => {

         cy.visit('https://the-internet.herokuapp.com/javascript_alerts', customTimeOut)
         cy.get("button[onclick='jsConfirm()']").click()
     
         cy.on('window:confirm', (a) => {
             expect(a).to.contains('I am a JS Confirm')
         })
             // confirm window will automatically closed by cyperss
     
             cy.get('#result').should('have.text', 'You clicked: Ok')
     
         })

            //Cancel button in JS in Confirm
         it('Confirm button-Cancel', () => {

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts', customTimeOut)
            cy.get("button[onclick='jsConfirm()']").click()
        
            cy.on('window:confirm', (a) => {
                expect(a).to.contains('I am a JS Confirm')
            })
                // confirm window will automatically closed by cyperss even it clicks cancel
        
                cy.on('window:confirm', () => false) // it closed automatically by using cancel button

                cy.get('#result').should('have.text', 'You clicked: Cancel')
        
            })

                //  3 Javascipt Prompt Alert: it will have some text with a text box for input along with OK  and Cancel  button
            it.only('Prompt window', () => {

                cy.visit('https://the-internet.herokuapp.com/javascript_alerts', customTimeOut)
                
                // this is a method which created before opening the alert window

                cy.window().then((win) => { // win is a variable. so it needs variable to capture the window

                    cy.stub(win,'prompt').returns('sdsd')

                })
                    cy.get("button[onclick='jsPrompt()']").click() 
                    
                    // cypress automatically close prompted alert - it will use OK button - by default
                    cy.get('#result').should('have.text', 'You entered: sdsd')
                })

                // 4 Authenticated Alert

                it.only('Authenticated Alert', () => {

                    cy.visit('https://the-internet.herokuapp.com/javascript_alerts', customTimeOut)
                    
                    // this is a method which created before opening the alert window
    
                    cy.window().then((win) => { // win is a variable. so it needs variable to capture the window
    
                        cy.stub(win,'prompt').returns('sdsd')
    
                    })
                        cy.get("button[onclick='jsPrompt()']").click() 
                        
                        // cypress automatically close prompted alert - it will use OK button - by default
                        cy.get('#result').should('have.text', 'You entered: sdsd')
                    })


})