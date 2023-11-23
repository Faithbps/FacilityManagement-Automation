describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();
        cy.get('#root > nav > div > div:nth-child(8) > div.dropdown > a:nth-child(1)').click({force: true});
        cy.get('.custom-card > .btn').click();
        cy.get(':nth-child(1) > .col-lg-12 > .form-selector > .form-input > .input-wrapper > .undefined').type('Goodness');
        cy.get(':nth-child(2) > .col-lg-12 > .form-selector > .form-input > .input-wrapper > .undefined').type('08162187279');
        cy.get('.react-datepicker__input-container > input').click();
        cy.get('.react-datepicker__day--021').click();
        cy.get('.react-datepicker__day--022').click();
        cy.get(':nth-child(2) > .ant-picker > .ant-picker-input > input').click();
        cy.get('<a class="ant-picker-now-btn">Now</a>').click();
        // cy.get(':nth-child(3) > .ant-picker > .ant-picker-input > input').click();
       


        
    })

})