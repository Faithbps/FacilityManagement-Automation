describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('olayinkaoyesina1@gmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Testtesttest1');
        cy.get('.btn').click();

        cy.get('[href="/tenant-payments"] > .name').click();
        cy.get('.react-dropdown-select').click();
        cy.get('[aria-label="Utility"]').click({force: true});


    })

})