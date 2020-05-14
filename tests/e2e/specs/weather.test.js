'use strict';

describe('Weather', () => {
    it('renders properly', () => {
        cy.visit('/');
        cy.mockWeatherRequest();

        cy.submitSalary(10, 'Employer-Tab');
        cy.submitSalary(10, 'Employee-Tab');

        cy.get('.modal-dialog').should('be.visible');
        cy.get('.modal-dialog .modal-body').contains('Loading');
        cy.get('.modal-dialog .modal-body').contains('By the way, here is the weather in London: 7.17°C, Drizzle');
    });
});
