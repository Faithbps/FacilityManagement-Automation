describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
        cy.get('.btn').click();

        cy.get('[href="/settings"]').click();
        cy.get('#controlled-tab-example-tabpane-accountManagement > .account-management > .account-management-row > .acc-records-wrapper > .account-records-table > .table-wrapper > .table-filter > :nth-child(2) > .search-input > input').click().type('lola01@yopmail.com');
        cy.get('#controlled-tab-example-tabpane-accountManagement > .account-management > .account-management-row > .acc-records-wrapper > .account-records-table > .table-wrapper > .table-filter > :nth-child(2) > .btn').click();
        cy.get('#controlled-tab-example-tabpane-accountManagement > .account-management > .account-management-row > .acc-records-wrapper > .account-records-table > .table-wrapper > .table-filter > :nth-child(2) > .search-input > input').clear();
        cy.wait(3000)
        cy.get(':nth-child(3) > :nth-child(1) > .react-dropdown-select').click();
        cy.wait(3000)
        cy.get(':nth-child(4) > :nth-child(1) > .react-dropdown-select').click();
        cy.wait(3000)
        cy.get('[aria-label="Resident"]').click();
        cy.get('.next > a').click();
        
        // Add user

       cy.get('[aria-controls="add-user"]').click();
       cy.get(':nth-child(1) > .form-selector > :nth-child(2) > .react-dropdown-select').click();
       cy.get('[aria-label="FUTURE KIDS"]').click();
       cy.wait(3000)
       cy.get(':nth-child(2) > .form-selector > :nth-child(2) > .react-dropdown-select').click();
       cy.get('[aria-label="Resident"]').click();
       cy.wait(3000)
       cy.get(':nth-child(3) > .form-selector > .form-input > .input-wrapper > .undefined').click().type('Ife');
       cy.get(':nth-child(4) > .form-selector > .form-input > .input-wrapper > .undefined').click().type('Bash');
       cy.wait(3000)
       cy.get(':nth-child(5) > .form-selector > .form-input > .input-wrapper > .undefined').click().type('7801233');
       cy.get(':nth-child(6) > .form-selector > .form-input > .input-wrapper > .undefined').click().type('67');
       cy.wait(3000)
       cy.get(':nth-child(7) > .form-selector > .form-input > .input-wrapper > .undefined').click().type('ifebash@mail.com');
       cy.get(':nth-child(8) > .form-selector > .form-input > .input-wrapper > .undefined').click().type('08062987270');
       cy.wait(3000)
       cy.get(':nth-child(9) > .form-selector > .form-input > .input-wrapper > .undefined').click().type('Maryland');

        //cancel
        cy.get('.btn-cancel').click();
        //save
        // cy.get('.row > .btn-wrapper > .btn')

    })

})