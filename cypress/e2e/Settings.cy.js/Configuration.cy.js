describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();

        cy.get('[href="/settings"]').click();
        cy.get('#controlled-tab-example-tab-configuration').click();
        cy.wait(3000)
        cy.get(':nth-child(1) > .config-input > :nth-child(1)').click();

        // save general
        // cy.get('.currency-button').click

        cy.get('.buttons-wrapper > :nth-child(2)').click();
        cy.get(':nth-child(2) > .config-input > .col-8 > .form-input > .input-wrapper > .undefined').click().clear().type('10');

        // save grid
        // cy.get(':nth-child(2) > .config-input > .col-4 > .btn').click();

        cy.get('.buttons-wrapper > :nth-child(3)').click();
        cy.get(':nth-child(3) > .config-input > .col-8 > .form-input > .input-wrapper > .undefined').click().clear().type('70')

        // save solar
        // cy.get(':nth-child(3) > .config-input > .col-4 > .btn').click();

        cy.get('.buttons-wrapper > :nth-child(4)').click();
        cy.wait(3000)
        cy.get(':nth-child(4) > :nth-child(1) > .col-8 > .form-input > .input-wrapper > .undefined').click().clear().type('20');
        cy.wait(3000)
        cy.get(':nth-child(2) > .col-8 > .form-input > .input-wrapper > .undefined').click().clear().type('70');

        // // save generator rating
        // cy.get(':nth-child(4) > :nth-child(1) > .col-4 > .btn').click();
        // // save tank capacity
        // cy.get(':nth-child(2) > .col-4 > .btn').click();

        // logout
        cy.get('.logout > .name').click();
    })

})