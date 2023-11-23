describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('damilolao@bpsafrica.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Damilola@1');
        cy.get('.btn').click();
        cy.wait(3000)

        cy.get(':nth-child(3) > .dropdown-trigger > .arrow').click();
        cy.wait(3000)
        cy.get('[href="/energy-consumption"]').click({force: true});

        cy.wait(3000)

        cy.get(':nth-child(1) > .solar > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        cy.get(':nth-child(1) > .solar > .checkbox-wrapper > .checkbox > input').uncheck({force: true});
        cy.get(':nth-child(1) > .gas > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        cy.get(':nth-child(1) > .gas > .checkbox-wrapper > .checkbox > input').uncheck({force: true});
        // cy.get('#react-aria8414002347-6-tabpane-11 > .legend-wrapper > .legend > :nth-child(2) > .item > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        // cy.get('#react-aria8414002347-6-tabpane-11 > .legend-wrapper > .legend > :nth-child(2) > .item > .checkbox-wrapper > .checkbox > input').uncheck({force: true});
        cy.get(':nth-child(1) > .solar > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        cy.get(':nth-child(1) > .solar > .checkbox-wrapper > .checkbox > input').check({force: true});

        cy.wait(3000)
        // cy.get('#react-aria8414002347-6-tabpane-11 > .legend-wrapper > .legend > :nth-child(2) > .item > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        // cy.get('#react-aria8414002347-6-tabpane-11 > .legend-wrapper > .legend > :nth-child(2) > .item > .checkbox-wrapper > .checkbox > input').check({force: true});
        cy.get(':nth-child(1) > .gas > .checkbox-wrapper > .checkbox > .checkmark').click({force: true});
        cy.get(':nth-child(1) > .gas > .checkbox-wrapper > .checkbox > input').check({force: true});
        cy.get('.inner-tabs-header > .date > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
        cy.get(':nth-child(1) > .CalendarDay__firstDayOfWeek').click({force: true});
        cy.get('.CalendarDay__selected_end').click();
    
        cy.wait(3000)
        //cy.get('#react-aria6767998960-5-tabpane-1 > .inner-tabs > .col-12 > .c-header > .download').click(({force: true}));
        
    })

})