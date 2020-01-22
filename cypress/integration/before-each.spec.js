//In this example I'm accessing the index of the HTML element to test it
//This is not the best approach, because if the position changes the test will fail. 
describe("Text box with mas characters", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
        .as('charsLeftSpan');

        cy.get('[data-cy="input-last-name"]')
        .as('charInput')
    })

    it("Display what I want ", ()=>{
        cy.get('@charsLeftSpan')
        //The charsLeftSpan is the DOM element the Cypress return to us.
            .then($charsLeftSpan =>{
                expect($charsLeftSpan.text()).to.equal('15');
             });
             
        cy.get('@charInput').type('hello');

        cy.get('@charsLeftSpan')

             .then($charsLeftSpan =>{
                 expect($charsLeftSpan.text()).to.equal('10');
             })
          
            // .invoke('text')
            // .should('equal', '10');

        cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            
            .invoke('text')
            .should('equal', '0');
    });

    it('Prevents the user from typing more characters when max is exceeded', ()=>{
        cy.get('@charInput').type('jsjsjsjsjsjsjsjsjsjsjasasasas')
        cy.get('@charInput')
            .should('have.attr', 'value', 'jsjsjsjsjsjsjsj')
    })
})