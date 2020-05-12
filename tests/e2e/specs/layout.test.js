'use strict';

// https://docs.cypress.io/api/introduction/api.html

describe('Layout', () => {
    it('Visits the app root url', () => {
        const appTitle = 'Negotiation App';
        cy.visit('/');
        cy.contains('h1', appTitle);
        cy.title().should('eq', appTitle);
    });
});
