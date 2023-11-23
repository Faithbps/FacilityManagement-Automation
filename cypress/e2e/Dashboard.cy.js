describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();
        cy.get(':nth-child(2) > :nth-child(2) > .react-dropdown-select').click();
    cy.wait('3000')
        cy.get('[aria-label="Jun 2023"]').click({force: true});
        cy.get(':nth-child(1) > :nth-child(4) > :nth-child(2) > .react-dropdown-select > .react-dropdown-select-content').click();
    cy.wait('3000')
        cy.get('[aria-label="Jul 2023"]').click({force: true});
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .react-dropdown-select > .react-dropdown-select-content > span').click();
    cy.wait('3000')
        cy.get('[aria-label="Aug 2023"]').click({force: true});
        cy.get(':nth-child(2) > :nth-child(4) > :nth-child(2) > .react-dropdown-select > .react-dropdown-select-content > span').click();
    cy.wait('3000')
        cy.get('[aria-label="Sep 2023"]').click({force: true});
        cy.get(':nth-child(3) > .col-8 > .custom-card > .row > :nth-child(1) > .chart-card-header > .flex-row > :nth-child(2)').click();
        cy.get('.chart-card-header > .flex-row > :nth-child(3)').click();
    cy.wait('3000')
        cy.get('.tab-header > .flex-row > :nth-child(2)').click();
        cy.get('.tab-header > .flex-row > :nth-child(3)').click();
        cy.get('.flex-row > :nth-child(4)').click();


    })

})