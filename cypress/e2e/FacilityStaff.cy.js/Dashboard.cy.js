describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('damilolao@bpsafrica.com ');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Damilola@1');
        cy.get('.btn').click();

        cy.get('.dashboard > :nth-child(1) > .date-picker-wrap > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
        cy.get('[aria-label="Selected. Thursday, November 2, 2023"]').click();
    cy.wait(3000)
        cy.get('[aria-label="Choose Thursday, November 30, 2023 as your check-out date. It’s available."]').click();
    cy.wait(3000)
        cy.get(':nth-child(4) > .col-8 > .custom-card > .row > :nth-child(1) > .chart-card-header > .flex-row > :nth-child(2)').click({Forec: true});
        cy.get('.chart-card-header > .flex-row > :nth-child(3)').click();
        cy.get('.dashboard > :nth-child(1) > .date-picker-wrap > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
        cy.get(':nth-child(1) > .CalendarDay__selected_span_3').click();
        cy.get('[aria-label="Selected. Wednesday, November 29, 2023"]').click({Forec: true});
    cy.wait(3000)
        cy.get(':nth-child(4) > .col-4 > .custom-card > .c-header > .date-picker-wrap > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
        cy.get('[aria-label="Selected. Thursday, November 2, 2023"]').click();
        cy.get('[aria-label="Choose Thursday, November 30, 2023 as your check-out date. It’s available."]').click();
    cy.wait(3000)
        cy.get('.tab-header > .flex-row > :nth-child(2)').click();
    cy.wait(3000)
        cy.get(':nth-child(5) > .col-8 > .custom-card > .row > :nth-child(1) > .chart-card-header > .date-picker-wrap > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
        cy.get('[aria-label="Selected. Thursday, November 2, 2023"]').click();
    cy.wait(3000)
        cy.get('[aria-label="Choose Thursday, November 30, 2023 as your check-out date. It’s available."]').click();
        cy.get('.custom-card > .savings-card > .c-header > .date-picker-wrap > .App > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > :nth-child(1) > #start-date').click();
    cy.wait(3000)
        cy.get('[aria-label="Selected. Thursday, November 2, 2023"]').click({Forec: true});
        cy.get('[aria-label="Choose Thursday, November 30, 2023 as your check-out date. It’s available."]').click();
        
    })


})