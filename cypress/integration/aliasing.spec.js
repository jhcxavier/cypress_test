//In this example I'm accessing the index of the HTML element to test it
//This is not the best approach, because if the position changes the test will fail. 
describe("Text box with mas characters", ()=>{
    it("Display what I want ", ()=>{
        cy.visit('http://localhost:3000/example-3');

        // The recommended way of of selecting elements in Cypress is by using special data 
        // attributes on the elements we want to test. which is the data-cy attribute and you can 
        //assign any unique value to it

        //The 2 lines below is how we replace the "cy.get('[data-cy="last-name-chars-left-count"]')"
        // using .as('') -- Also, you need to use @ when using alias.
        cy.get('[data-cy="last-name-chars-left-count"]')
        .as('charsLeftSpan');

        cy.get('[data-cy="input-last-name"]')
        .as('charInput')

        cy.get('@charsLeftSpan')
            
            .invoke('text')
            .should('equal', '15');

        cy.get('@charInput').type('hello');

        cy.get('@charsLeftSpan')
          
            .invoke('text')
            .should('equal', '10');

        cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            
            .invoke('text')
            .should('equal', '0');
    });

    it('Prevents the user from typing more characters when max is exceeded', ()=>{
        cy.visit('http://localhost:3000/example-3');
        //We need to declare the alias again because is a different function
        cy.get('[data-cy="input-last-name"]')
        .as('charInput')
        cy.get('@charInput').type('jsjsjsjsjsjsjsjsjsjsjasasasas')
        cy.get('@charInput')
            .should('have.attr', 'value', 'jsjsjsjsjsjsjsj')
    })
})