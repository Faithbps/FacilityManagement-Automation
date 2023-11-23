describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('sectwo@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();
        cy.get('[href="/settings"]').click();

        cy.get('#controlled-tab-example-tab-profile').click();
        cy.get(':nth-child(1) > :nth-child(1) > .form-input > .input-wrapper > .undefined').click().clear().type('Ife');
        cy.get(':nth-child(2) > :nth-child(1) > .form-input > .input-wrapper > .undefined').click().clear().type('Bash');
        cy.wait(3000)
        cy.get('.profile-input-row > :nth-child(1) > :nth-child(2) > .form-input > .input-wrapper > .undefined').click().clear().type('ifebash@mail.com');
        cy.get('.profile-input-row > :nth-child(2) > :nth-child(2) > .form-input > .input-wrapper > .undefined').click().clear().type('08012637890');

        // save
        // cy.get('.col > .btn-wrapper > .btn').click();

    })

})