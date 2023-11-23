describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('damilolao@bpsafrica.com ');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Damilola@1');
        cy.get('.btn').click();
        cy.get('[href="/service-request"] > .name').click();
        cy.get('.card-btn > .btn').click();
        cy.get(':nth-child(1) > .form-selector > :nth-child(2) > .react-dropdown-select').click();
        cy.get('[aria-label="Plumbing"]').click();
        cy.get(':nth-child(2) > .form-selector > :nth-child(2) > .react-dropdown-select').click();
        cy.get('[aria-label="Routine service"]').click();
        cy.get(':nth-child(1) > :nth-child(3) > .form-selector > :nth-child(2) > .react-dropdown-select').click();
        cy.get('.react-dropdown-select-item-selected').click();
        cy.get(':nth-child(2) > .form-input > .input-wrapper > .undefined').click().clear().type('200');
        cy.get(':nth-child(2) > :nth-child(3) > .form-selector > :nth-child(2) > .react-dropdown-select').click();
        cy.get('[aria-label="High"]').click({force: true});
        cy.get('.col-lg-8 > .form-selector > textarea').type('Hello Faith, you have a new request for maintenance, please contact the Admin for further details');
        cy.get('.col-lg-4 > .form-selector > textarea').type('Approved')

        //cancel
        cy.get('.btn-outline').click();

        //save
        //cy.get('.buttons-wrapper > .btn-primary').click();

    })

})