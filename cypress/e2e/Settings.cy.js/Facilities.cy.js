describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();

        cy.get('[href="/settings"]').click();
        cy.get('#controlled-tab-example-tab-facilities').click();
        cy.get('#controlled-tab-example-tabpane-facilities > .account-management > .account-management-row > .acc-records-wrapper > .account-records-table > .table-wrapper > .table-container > .table > tbody > :nth-child(1) > :nth-child(4)').click();
        cy.get('.modal-h > :nth-child(1) > span').click();
        cy.wait(3000)
        cy.get('#controlled-tab-example-tabpane-facilities > .account-management > .account-management-row > .acc-records-wrapper > .account-records-table > .table-wrapper > .table-filter > :nth-child(2) > .search-input > input').click().type('josh@yopmail.com');
        cy.wait(3000)
        cy.get('#controlled-tab-example-tabpane-facilities > .account-management > .account-management-row > .acc-records-wrapper > .account-records-table > .table-wrapper > .table-filter > :nth-child(2) > .btn').click();
    })

})