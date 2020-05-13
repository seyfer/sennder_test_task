'use strict';

describe('Weather', () => {
    it('renders properly', () => {
        cy.visit('/');

        //test success
        cy.get('a[aria-selected="true"]').contains('Employer-Tab');
        cy.get('.tab-pane.active.card-body input').type(10);
        cy.get('.tab-pane.active.card-body .btn-primary').click();

        cy.get('a[aria-selected="true"]').contains('Employee-Tab');
        cy.get('.tab-pane.active.card-body input').type(10);
        cy.get('.tab-pane.active.card-body .btn-primary').click();

        cy.get('.modal-dialog').should('be.visible');
        cy.get('.modal-dialog .modal-body').contains('Loading');
        cy.get('.modal-dialog .modal-body').contains('By the way, here is the weather');
    });
});
