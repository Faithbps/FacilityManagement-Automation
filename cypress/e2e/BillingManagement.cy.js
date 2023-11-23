describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();
        cy.get('[href="/billing-management"]').click();


        //edit
        // cy.get('.search-input > input').click().type('YEMI');
        // cy.get('.table-filter > .btn').click();
        // cy.get(':nth-child(1) > .edit').click()
        // cy.wait(3000)
        // cy.get('.col-lg-8 > .form-input > .input-wrapper > .undefined').clear().type('5000');
        // cy.get(':nth-child(3) > :nth-child(2) > .form-input > .input-wrapper > .undefined').clear().type('1000');
        // cy.get('textarea').clear().type('Please approve')

        // //cancel edit
        // // cy.get('.buttons-wrapper > .btn-outline').click()

        // // save edit
        // cy.get('.buttons-wrapper > .btn-primary').click();

        // create bill
        cy.get('.card-btn > .btn').click();
        cy.get('.tenant > .form-selector > :nth-child(2) > .react-dropdown-select > .react-dropdown-select-content').click();
        cy.wait(3000)
        cy.get('[aria-label="dami dami (ibeibe479@gmail.com)"]').click();
        cy.get('.react-date-picker__calendar-button').click();
        cy.get(':nth-child(41) > abbr').click();
        cy.wait(3000)
        cy.get(':nth-child(2) > .col-lg-4 > .form-selector > :nth-child(2) > .react-dropdown-select').click();
        cy.get('[aria-label="Other"]').click();
        cy.get('.col-lg-8 > .form-input > .input-wrapper > .undefined').clear('7');
        cy.get('.col-lg-8 > .form-input > .input-wrapper > .undefined').type('7000');
        cy.get(':nth-child(3) > :nth-child(2) > .form-input > .input-wrapper > .undefined').clear('7');
        cy.get(':nth-child(3) > :nth-child(2) > .form-input > .input-wrapper > .undefined').type('7000');
        cy.get('textarea').click();

        // cancel
        cy.get('.buttons-wrapper > .btn-outline').click();

        // save
        // cy.get('.buttons-wrapper > .btn-outline').click();
        })


        })