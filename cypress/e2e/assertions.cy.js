

describe("Assertion demo", ()=>{

    const customTimeOut = {timeout: 120000}

    it("implicit assert",()=>{


   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', customTimeOut)
   
   //should and implicit assertion
   cy.url().should('include', 'orangehrmlive.com', customTimeOut)
    .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('not.contain','google123')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding', customTimeOut).should('be.visible')//logo visible
        .and('exist')// logo exist
        
        cy.xpath("//a").should('have.length', '5') //no. of links
        
        cy.get('input[placeholder=Username]', customTimeOut).type('Admin') // provide a value into inputbox
        cy.get('input[placeholder="Username"]').should('have.value', 'Admin') //value
            
        cy.get('input[placeholder="Password"]', customTimeOut).type('admin123') // provide a value into inputbox
        cy.get('input[placeholder="Password"]').should('have.value', 'admin123') // value
        cy.get("button[type=submit]").click()

        cy.get('.oxd-userdropdown-name').click()

    })
    it ("explicit assertions", ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', customTimeOut)
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("Admin")
        cy.get("button[type=submit]").click()

        let expName="xyz"; 
        
        cy.get(".oxd-userdropdown-name").then( (x)=>{




        })
    })
}) 
