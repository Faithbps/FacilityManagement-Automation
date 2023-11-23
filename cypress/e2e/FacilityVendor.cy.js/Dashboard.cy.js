describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('wipotteweilei-4677@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('bfc89b38');
        cy.get('.btn').click();

        cy.get('.search-input > input').click().type('F026');
        cy.wait(3000)

        //Cost summary card date picker
        cy.get('.dashboard > :nth-child(1) > .date-picker-wrap > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault').click();
        cy.get(':nth-child(1) > .CalendarDay__firstDayOfWeek').click();
        cy.get('[aria-label="Selected. Thursday, October 26, 2023"]').click();

        //Cost summary table date picker
        cy.get('.c-header > .date-picker-wrap > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
        cy.get('.DayPickerNavigation_leftButton__horizontalDefault').click();
        cy.get(':nth-child(1) > .CalendarDay__firstDayOfWeek').click();
        cy.get('.CalendarDay__today').click();

    })

})