describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('damilolao@bpsafrica.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Damilola@1');
        cy.get('.btn').click();
    cy.wait(3000)
        cy.get(':nth-child(3) > .dropdown-trigger > .arrow').click();
        cy.get('[href="/diesel-monitoring"]').click({force: true});
    cy.wait(3000)

        cy.get('#start-date').click();
        cy.get('[aria-label="Selected. Thursday, November 2, 2023"]').click();
        cy.get('#end-date').click();
        cy.get('.CalendarDay__today').click();

    // add generator
        cy.get('.title-wrapper > .btn').click();
        cy.get(':nth-child(3) > .form-input > .input-wrapper > .undefined').clear('T');
        cy.get(':nth-child(3) > .form-input > .input-wrapper > .undefined').type('Thankgod');
        cy.get(':nth-child(4) > .form-input > .input-wrapper > .undefined').clear('7');
        cy.get(':nth-child(4) > .form-input > .input-wrapper > .undefined').type('70');
        cy.get(':nth-child(5) > .form-input > .input-wrapper > .undefined').clear('M');
        cy.get(':nth-child(5) > .form-input > .input-wrapper > .undefined').type('Milkose');
        cy.get(':nth-child(1) > .form-input > .input-wrapper > .undefined').clear('1');
        cy.get(':nth-child(1) > .form-input > .input-wrapper > .undefined').type('14');
        cy.get('.react-date-picker__calendar-button').click();
        cy.get(':nth-child(28) > abbr').click();


        //cancel
        cy.get('.buttons-wrapper > .btn-outline').click();

        // save
        // cy.get('.buttons-wrapper > .btn-primary').click();

    })

})