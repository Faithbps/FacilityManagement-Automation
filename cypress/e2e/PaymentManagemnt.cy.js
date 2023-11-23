describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login')
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();
        cy.get('[href="/payment-management"] > .name').click();
        cy.get('.card-btn > .btn').click();
        cy.get('.col-lg-4 > .form-selector > .form-input > .input-wrapper > .undefined').click({force: true})
        
        // Input Vendor payment details
        cy.get('.col-lg-8 > .form-selector > .form-input > .input-wrapper > .undefined').click({force: true}).type('Faith&co');
        cy.get('.col-lg-4 > .form-selector > :nth-child(2) > .react-dropdown-select').click();
        cy.get('[aria-label="FUR-111"]').click();
        cy.get('.col-lg-8 > .form-input > .input-wrapper > .undefined').type('Ikeja');
        cy.get('.col-lg-8 > .form-selector > :nth-child(2) > .react-dropdown-select > .react-dropdown-select-content').click();
        cy.get('.react-date-picker__wrapper').click();
        cy.get(':nth-child(3) > .form-input > .input-wrapper > .undefined').clear().type('500');
        cy.wait(3000)
        cy.get('.buttons-wrapper > .btn-primary').click();
        // cancel
        // cy.get('.btn-outline').click();
        // save
        //cy.get('.buttons-wrapper > .btn-primary').click({force: true});




    })

})