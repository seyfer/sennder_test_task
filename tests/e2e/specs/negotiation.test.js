'use strict';

//maybe I would use cypress-cucumber with Gherkin syntax

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

    it('implements negotiation process with success and failure', () => {
        cy.visit('/');

        //test success
        cy.get('a[aria-selected="true"]').contains('Employer-Tab');
        cy.get('.tab-pane.active.card-body input').type(10);
        cy.get('.tab-pane.active.card-body .btn-primary').click();

        cy.get('a[aria-selected="true"]').contains('Employee-Tab');
        cy.get('.tab-pane.active.card-body input').type(10);
        cy.get('.tab-pane.active.card-body .btn-primary').click();

        cy.get('.modal-dialog').should('be.visible');
        cy.get('.modal-dialog .modal-header').contains('Success!');
        cy.get('.modal-dialog .modal-body').contains('Maximum offer was: 1');
        cy.get('.modal-dialog .modal-body').contains('Minimum expected salary was: 1');

        //close
        cy.get('.modal-dialog .btn-success').click();
        cy.get('.modal-dialog').should('be.not.visible');

        //test failure case
        cy.get('a[aria-selected="true"]').contains('Employer-Tab');
        cy.get('.tab-pane.active.card-body input').type(11);
        cy.get('.tab-pane.active.card-body .btn-primary').click();

        //additionally check that submitted form message shown
        cy.get('.nav-tabs .nav-item:first-child').click();
        cy.get('.tab-pane.active.card-body .alert-success').should('be.visible')
            .contains('This form was already submitted');
        cy.get('.nav-tabs .nav-item:last-child').click();

        cy.get('a[aria-selected="true"]').contains('Employee-Tab');
        cy.get('.tab-pane.active.card-body input').type(12);
        cy.get('.tab-pane.active.card-body .btn-primary').click();

        cy.get('.modal-dialog').should('be.visible');
        cy.get('.modal-dialog .modal-header').contains('Failure!');
    });

    it('does not allow input number below 0 and not a number', () => {
        cy.visit('/');
        cy.get('a[aria-selected="true"]').contains('Employer-Tab');
        cy.get('.tab-pane.active.card-body input').as('salaryInput');
        cy.get('@salaryInput').type(-1);
        cy.get('@salaryInput').should('have.value', '0');
        cy.get('@salaryInput').type('qwerty');
        cy.get('@salaryInput').should('have.value', '0');

        cy.get('.tab-pane.active.card-body .btn-primary').click();
        cy.get('.invalid-feedback').should('be.visible').contains('Please enter any number greater than 0');
    });
});
