describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('olayinkaoyesina1@gmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Testtesttest1');
        cy.get('.btn').click();

        cy.get(':nth-child(4) > .col-8 > .custom-card > .row > :nth-child(1) > .chart-card-header > .flex-row > :nth-child(2)').click();
        cy.get('.chart-card-header > .flex-row > :nth-child(3)').click();
        cy.get(':nth-child(4) > .col-8 > .custom-card > .row > :nth-child(1) > .chart-card-header > :nth-child(2) > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
    cy.wait(3000)
        cy.get('[aria-label="Selected. Monday, November 6, 2023"]').click();
        cy.get('.CalendarDay__today').click();

        cy.get('.tab-header > .flex-row > :nth-child(2)').click();
        cy.get('.tab-header > .flex-row > :nth-child(3)').click();
    cy.wait(3000)
        cy.get('.flex-row > :nth-child(4)').click();
        cy.get(':nth-child(5) > .col-8 > .custom-card > .row > :nth-child(1) > .chart-card-header > .flex-row > :nth-child(2)').click();
    cy.wait(3000)
        cy.get('.grid > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get('.diesel > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get('.solar > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get('.gas > .checkbox-wrapper > .checkbox > .checkmark').click();
    cy.wait(3000)
        cy.get('.grid > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get('.diesel > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get('.solar > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get('.gas > .checkbox-wrapper > .checkbox > .checkmark').click();

        
        
     
    })

})