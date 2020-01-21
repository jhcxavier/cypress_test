//In this example I'm accessing the HTML element to test it
//This is not the best approach, because if the element is duplcated the test will fail. 
describe("Text box with mas characters", ()=>{
    it("Display what I want ", ()=>{
        cy.visit('http://localhost:3000/example-2');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input').type('hello');

        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input').type(' my friend');

        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    });

    it('Prevents the user from typing more characters when max is exceeded', ()=>{
        cy.visit('http://localhost:3000/example-2');
        cy.get('input').type('jsjsjsjsjsjsjsjsjsjsjasasasas')
        cy.get('input')
            .should('have.attr', 'value', 'jsjsjsjsjsjsjsj')
    })
})