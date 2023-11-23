describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('damilolao@bpsafrica.com ');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Damilola@1');
        cy.get('.btn').click();
        cy.get('[href="/admin-guest-management"] > .name').click({force: true});
        cy.get('.custom-card > .btn').click();
        cy.get(':nth-child(1) > .col-lg-12 > .form-selector > .form-input > .input-wrapper > .undefined').type('Goodness');
        cy.get(':nth-child(2) > .col-lg-12 > .form-selector > .form-input > .input-wrapper > .undefined').type('08162187279');
        cy.get('.react-datepicker__input-container > input').click();
        cy.get('.react-datepicker__day--021').click();
        cy.get('.react-datepicker__day--022').click();
        cy.get(':nth-child(2) > .ant-picker > .ant-picker-input > input').click();
    cy.wait(3000)
        cy.get(':nth-child(6) > .ant-picker-time-panel-cell-inner').click();
        cy.wait(3000)
        cy.get(':nth-child(2) > :nth-child(4) > .ant-picker-time-panel-cell-inner').click();
        cy.wait(3000)
        cy.get('[class=ant-picker-input"]').eq(1).click({force: true});
        /*cy.get('.btn-outline').click();*/
       
    })

})