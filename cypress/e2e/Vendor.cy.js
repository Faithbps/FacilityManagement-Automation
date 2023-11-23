/// <reference types="cypress" />


describe("validate loin landing page", () => {

it('verify user', () => {
    cy.visit('https://bps-fms-staging.azurewebsites.net/')
    cy.get('.button').click();
    cy.get(':nth-child(2) > .input-wrapper > .undefined').type('Ladex@yopmail.com');
    cy.get(':nth-child(3) > .input-wrapper > .undefined').type('P@ssword01');
    cy.get('.btn').click();
    cy.get('[href="/vendor-record"] > .name').click();
    cy.get(':nth-child(3) > a').click();
    cy.get('ul > :nth-child(4) > a').click();
    cy.get(':nth-child(5) > a').click();
    cy.get(':nth-child(6) > a').click();
    cy.get('.previous > a').click();
    cy.get('.next > a').click();
    cy.get('.search-input > input').type('New vendor');
    cy.get('.table-filter > .btn').click();
    cy.get(':nth-child(1) > .show-info > button > svg > [x="7"]').click();
    cy.get('.btn-back').click();
})
})