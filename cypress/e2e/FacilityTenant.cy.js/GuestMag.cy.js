

describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('olayinkaoyesina1@gmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Testtesttest1');
        cy.get('.btn').click();
        cy.get('[href="/tenant-guest-management"] > .name').click();

        cy.get(':nth-child(1) > .react-date-picker > .react-date-picker__wrapper > .react-date-picker__calendar-button').click();
        cy.get('.react-calendar__navigation__prev-button').click();
        cy.get('.react-calendar__navigation__prev-button').click();
        
        cy.get('.react-calendar__month-view__days > :nth-child(2)').click();
        cy.get('.search-input > input').type('KHALID').click();
        cy.get('.search-wrapper > .btn').click();

    })

})