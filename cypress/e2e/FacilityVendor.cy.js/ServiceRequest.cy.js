describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('wipotteweilei-4677@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('bfc89b38');
        cy.get('.btn').click();

    cy.wait(3000)
        cy.get('[href="/service-request"] > .name').click();

        //log record date picker
        cy.get(':nth-child(1) > .react-date-picker > .react-date-picker__wrapper > .react-date-picker__calendar-button').click();
        cy.get('.react-calendar__navigation__prev-button').click();
        cy.get(':nth-child(32) > abbr').click();
        cy.get(':nth-child(2) > .react-date-picker > .react-date-picker__wrapper > .react-date-picker__calendar-button').click();
    cy.wait(3000)
        cy.get(':nth-child(2) > .react-date-picker > [style="display: contents;"] > .react-date-picker__calendar > .react-calendar > .react-calendar__navigation > .react-calendar__navigation__prev-button').click();
        cy.get(':nth-child(2) > .react-date-picker > [style="display: contents;"] > .react-date-picker__calendar > .react-calendar > .react-calendar__viewContainer > .react-calendar__month-view > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days > :nth-child(32)').click();
    cy.wait(3000)
        cy.get(':nth-child(1) > .react-date-picker > .react-date-picker__wrapper > .react-date-picker__clear-button').click();
        cy.get('.show > .react-date-picker > .react-date-picker__wrapper > .react-date-picker__clear-button').click({force: true});

    cy.wait(3000)   
        cy.get('.search-input > input').click().type('GEN-192');
    cy.wait(3000)
        cy.get('.table-filter > :nth-child(2) > .btn').click();
        cy.get('.search-input > input').click().clear();

    cy.wait(3000)
        cy.get(':nth-child(2) > .edit > a').click();  
        cy.get('.buttons-wrapper > .btn').click({force: true});
 

        })
})