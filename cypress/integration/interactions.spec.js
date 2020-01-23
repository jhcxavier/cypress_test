describe('Basic page interactions', ()=>{
    beforeEach(()=>{
        //using baseUrl
        cy.visit('/example-4');
    })

    it('sets the header text to the item\'s name when double clicked', ()=>{
        //testing the double click action

        //with "box-1-items-list" we are selecting the surrounding element,
        // > :nth-child(2) for choosing the second option
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
        .dblclick(); //action 

        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text') 
            .should('equal', 'Option Two'); // second parameter to be checked.
    });

    it('it displays the correct count for the nuymber of selected check boxes', ()=>{
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
        .check();

        cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('equal', '1');
    })

    it('display the name of thr current selected item', ()=>{
        cy.get('[data-cy=box-3-dropdown]')
            .select('Option Three');

        cy.get('[data-cy=box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option Three')
    })

})