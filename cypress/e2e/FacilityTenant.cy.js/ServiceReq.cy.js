describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('olayinkaoyesina1@gmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Testtesttest1');
        cy.get('.btn').click();

        cy.get('.mb-5 > :nth-child(3) > a').click();
        cy.get(':nth-child(1) > .form-selector > :nth-child(2) > .react-dropdown-select').click();
        cy.get('[aria-label="Furniture"]').click();
        cy.get(':nth-child(2) > .form-selector > :nth-child(2) > .react-dropdown-select').click();
        cy.get('[aria-label="Low"]').click();
        cy.get('textarea').type('Making a new furniture fix request')
        cy.wait(3000)
        cy.get('.custom-file-upload').click();

        //cancel
        cy.get('.buttons-wrapper > .btn-outline').click();
        //save
        //cy.get('.buttons-wrapper > .btn-primary').click();

        //request history
        cy.get('#controlled-tab-example-tab-request-history').click();
        cy.get(':nth-child(1) > .show > a').click();
        cy.get(':nth-child(2) > .buttons-wrapper > .btn').click();
        cy.get(':nth-child(4) > :nth-child(1) > .react-dropdown-select').click();
        cy.get('[aria-label="Furniture"]').click({force: true});
        cy.get(':nth-child(5) > :nth-child(1) > .react-dropdown-select').click();
        cy.get('[aria-label="Routine service"]').click({force: true});
        cy.get(':nth-child(4) > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-clear').click();
        cy.get(':nth-child(5) > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-clear').click();
        cy.get(':nth-child(9) > :nth-child(1) > .react-dropdown-select').click();
        cy.get('[aria-label="Closed"]').click({force: true});
        cy.get(':nth-child(9) > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-clear').click();
        cy.get('.next').click({force: true});


    })

})