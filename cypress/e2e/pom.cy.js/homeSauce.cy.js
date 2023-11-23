
import homeSaucePage from '../../pages/homeSaucePage'
//import inventoryPage from '../../pages/inventoryPage'

describe ('pom implementation', () => {

    beforeEach(() => {
        cy.visit('https://bps-fms-staging.azurewebsites.net/login')
    });


       it('login to page', () => {

             homeSaucePage.typeUsername('Ladex@yopmail.com');
             homeSaucePage.typePassword('P@ssword01');
             homeSaucePage.clickLogin();

        //    // inventoryPage.elements.titleSpan().should('have.text', 'products');
        });
});


