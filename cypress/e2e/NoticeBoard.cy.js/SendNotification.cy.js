describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();

        cy.get('[href="/notice-board"]').click();
        cy.get(':nth-child(1) > .select > :nth-child(1) > .react-dropdown-select').click();
        cy.wait(3000)
        cy.get('[aria-label="FUTURE KIDS"]').click();
        cy.wait(3000)
        cy.get(':nth-child(1) > .select > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-clear').click();
        cy.wait(3000)
        cy.get(':nth-child(1) > .select > .select-all-button').click();

        cy.get(':nth-child(2) > .select > :nth-child(1) > .react-dropdown-select').click();
        cy.wait(3000)
        cy.get('[aria-label="Resident"]').click();
        cy.wait(3000)
        cy.get(':nth-child(2) > .select > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-clear').click();
        cy.wait(3000)
        cy.get(':nth-child(2) > .select > .select-all-button').click();
        cy.wait(3000)
        cy.get('.subject-area-wrapper > .ant-input').click().type('URGENT NOTICE');
        cy.wait(3000)
        cy.get('.notification-area-wrapper > .ant-input').click().type('Kindly be notified that the estate main gate will be closed by 5pm, please use the back gate when going out or coming in. Thank you for your co-operation');
        // savebutton
        // cy.get('.notification-button-wrapper > .btn').click();

    })

})