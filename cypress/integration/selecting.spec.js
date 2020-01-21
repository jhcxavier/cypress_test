//In this example I'm accessing the index of the HTML element to test it
//This is not the best approach, because if the position changes the test will fail. 
describe("Text box with mas characters", ()=>{
    it("Display what I want ", ()=>{
        cy.visit('http://localhost:3000/example-3');

        // The recommended way of of selecting elements in Cypress is by using special data 
        // attributes on the elements we want to test. which is the data-cy attribute and you can 
        //assign any unique value to it
        

        cy.get('[data-cy="last-name-chars-left-count"]')
            
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]').type('hello');

        cy.get('[data-cy="last-name-chars-left-count"]')
          
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]').type(' my friend');

        cy.get('[data-cy="last-name-chars-left-count"]')
            
            .invoke('text')
            .should('equal', '0');
    });

    it('Prevents the user from typing more characters when max is exceeded', ()=>{
        cy.visit('http://localhost:3000/example-3');
        cy.get('[data-cy="input-last-name"]').type('jsjsjsjsjsjsjsjsjsjsjasasasas')
        cy.get('[data-cy="input-last-name"]')
            .should('have.attr', 'value', 'jsjsjsjsjsjsjsj')
    })
})