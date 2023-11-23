describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('wipotteweilei-4677@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('bfc89b38');
        cy.get('.btn').click();

    cy.wait(3000)
        cy.get('[href="/settings"]').click();
        cy.get(':nth-child(4) > :nth-child(1) > .form-input > .input-wrapper > .undefined').click().clear().type('Ife');
        cy.get(':nth-child(4) > :nth-child(2) > .form-input > .input-wrapper > .undefined').click().clear().type('Bash');
        cy.wait(3000)
        cy.get(':nth-child(5) > :nth-child(1) > .form-input > .input-wrapper > .undefined').click().clear().type('ifebash@mail.com');
        cy.get(':nth-child(5) > :nth-child(2) > .form-input > .input-wrapper > .undefined').click().clear().type('08012637890');

        //business info
        cy.get(':nth-child(8) > :nth-child(1) > .form-input > .input-wrapper > .undefined').click().clear().type('qavdev');
        cy.get(':nth-child(8) > :nth-child(2) > .form-input > .input-wrapper > .undefined').click().clear().type('Ikorodu');
        cy.get(':nth-child(8) > :nth-child(3) > .form-input > .input-wrapper > .undefined').click().clear().type('Benin');
        cy.get(':nth-child(8) > :nth-child(4) > .form-input > .input-wrapper > .undefined').click().clear().type('Benin');
        cy.get('.mb-5 > :nth-child(2) > .react-dropdown-select').click();
        cy.get('.react-dropdown-select-item-selected').click({force: true}, { multiple: true });
        cy.get(':nth-child(6) > .form-input > .input-wrapper > .undefined').click().clear().type('CM5752571');
        cy.get(':nth-child(7) > .form-input > .input-wrapper > .undefined').click().clear().type('CM5752571');
        // cy.get(':nth-child(12) > .btn').click();

    })

})