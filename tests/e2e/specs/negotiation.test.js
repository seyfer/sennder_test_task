'use strict';

// https://docs.cypress.io/api/introduction/api.html

describe('Negotiation', () => {
    it('renders properly', () => {
        const appTitle = 'Negotiation App';
        cy.visit('/');
        cy.contains('h1', appTitle);
        cy.title().should('eq', appTitle);

        cy.get('.tabs').should('exist');
        cy.get('a[aria-selected="true"]').contains('Employer-Tab');
        cy.get('a[aria-selected="false"]').contains('Employee-Tab');

        cy.get('.input-group').contains('$');
        cy.get('.card-body .btn-primary').should('exist');
    });

    it('implements negotiation process', () => {
        cy.visit('/');
        cy.get('a[aria-selected="true"]').contains('Employer-Tab');
        cy.get('.tab-pane.active.card-body .btn-primary').click();

        cy.get('a[aria-selected="true"]').contains('Employee-Tab');
        cy.get('.tab-pane.active.card-body .btn-primary').click();
    });
});
