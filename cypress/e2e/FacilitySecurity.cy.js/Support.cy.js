describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('sectwo@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();

        cy.get('[href="/support"] > .name').click();
        cy.get(':nth-child(1) > .form-input > .input-wrapper > .undefined').click().type('Faith Iloba');
        cy.get(':nth-child(2) > .form-input > .input-wrapper > .undefined').click().type('ilobafaith@bps.com');
        cy.get(':nth-child(3) > .form-input > .input-wrapper > .undefined').click().type('08162187268');
        cy.get(':nth-child(4) > .form-input > .input-wrapper > .undefined').click().type('LOGIN ISSUE');
        cy.get('.support-message-area').click().type('Hello support, my name is Faith from Future kids facility, i am having an issue logging into my account, kindly assist with this request. Thank you for your time in resolving this.');
        //cy.get('.btn-wrapper > .btn')

        cy.get('[href="/support"] > .name').click();
        cy.get('#controlled-tab-example-tab-faq').click();

        //logout
        cy.get('.logout').click();
    })

})