describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('olayinkaoyesina1@gmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Testtesttest1');
        cy.get('.btn').click();

        cy.get('[href="/tenant-energy-consumption"]').click();

        cy.wait(3000)

        cy.get(':nth-child(1) > .solar > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        cy.get(':nth-child(1) > .solar > .checkbox-wrapper > .checkbox > input').uncheck({force: true});
        cy.get(':nth-child(1) > .gas > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        cy.get(':nth-child(1) > .gas > .checkbox-wrapper > .checkbox > input').uncheck({force: true});
        
        cy.get(':nth-child(1) > .solar > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        cy.get(':nth-child(1) > .solar > .checkbox-wrapper > .checkbox > input').check({force: true});

        cy.wait(3000)
        
        cy.get(':nth-child(1) > .gas > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        cy.get(':nth-child(1) > .gas > .checkbox-wrapper > .checkbox > input').check({force: true});
        cy.wait(3000)
        cy.get('.chart-card-header > :nth-child(2) > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
        cy.get('[aria-label="Selected. Thursday, November 2, 2023"]').click();
        cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(3) > .CalendarDay__lastDayOfWeek').click();
        cy.wait(3000)
        //consumption
        cy.get('.flex-row > :nth-child(2)').click();
        cy.get('.grid > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get('.grid > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get(':nth-child(1) > .diesel > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get(':nth-child(1) > .diesel > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get(':nth-child(2) > .solar > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get(':nth-child(2) > .solar > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get(':nth-child(2) > .gas > .checkbox-wrapper > .checkbox > .checkmark').click();
        cy.get(':nth-child(2) > .gas > .checkbox-wrapper > .checkbox > .checkmark').click();
    })

})