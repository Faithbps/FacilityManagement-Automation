describe("validate loin landing page", () => {

    it('verify user', () => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login'), {timeout: 500000, retryOnNetworkFailure: true};
        cy.get(':nth-child(2) > .input-wrapper > .undefined').type('damilolao@bpsafrica.com ');
        cy.get(':nth-child(3) > .input-wrapper > .undefined').type('Damilola@1');
        cy.get('.btn').click();

        cy.get('[href="/settings"]').click();

        //facilities
        cy.get('#controlled-tab-example-tab-facilities').click();
        cy.get('#controlled-tab-example-tabpane-facilities > .account-management > .account-management-row > .acc-records-wrapper > .account-records-table > .table-wrapper > .table-container > .table > tbody > :nth-child(1) > :nth-child(4)').click();
        cy.get('.modal-h > :nth-child(1) > span').click();
        cy.wait(3000)
        cy.get('#controlled-tab-example-tabpane-facilities > .account-management > .account-management-row > .acc-records-wrapper > .account-records-table > .table-wrapper > .table-filter > :nth-child(2) > .search-input > input').click().type('Oyesinamojeed@gmail.com');
        cy.wait(3000)
        cy.get('.row-item > :nth-child(5)').click();
        cy.wait(3000)
        cy.get('.modal-h > :nth-child(1) > span').click();


        //profile
        cy.get('#controlled-tab-example-tab-profile').click();
        cy.get(':nth-child(1) > :nth-child(1) > .form-input > .input-wrapper > .undefined').click().clear().type('Ife');
        cy.get(':nth-child(2) > :nth-child(1) > .form-input > .input-wrapper > .undefined').click().clear().type('Bash');
        cy.wait(3000)
        cy.get('.profile-input-row > :nth-child(1) > :nth-child(2) > .form-input > .input-wrapper > .undefined').click().clear().type('ifebash@mail.com');
        cy.get('.profile-input-row > :nth-child(2) > :nth-child(2) > .form-input > .input-wrapper > .undefined').click().clear().type('08012637890');
    })

    })
