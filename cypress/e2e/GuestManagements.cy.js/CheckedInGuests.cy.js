describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();

        cy.get(':nth-child(8) > .dropdown-trigger > .arrow').click();
        cy.wait(3000)
        cy.get('[href="/admin-checked-in-guests"] > .name').click({force: true});
        cy.get(':nth-child(1) > .react-date-picker > .react-date-picker__wrapper > .react-date-picker__calendar-button').click();
        cy.get('.react-calendar__month-view__days > :nth-child(7)').click();
        cy.get(':nth-child(2) > .react-date-picker > .react-date-picker__wrapper > .react-date-picker__calendar-button').click();
        cy.get(':nth-child(2) > .react-date-picker > [style="display: contents;"] > .react-date-picker__calendar > .react-calendar > .react-calendar__viewContainer > .react-calendar__month-view > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days > :nth-child(27) > abbr').click();
        cy.get('.search-input > input').clear('D');
        cy.get('.search-input > input').type('dami');
        cy.get('.btn > span').click();
        cy.get('.search-input > input').clear('dam');
       
    })
})