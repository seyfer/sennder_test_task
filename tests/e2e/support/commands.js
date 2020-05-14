'use strict';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


import weatherLondon from '../../fixtures/weather_london.json';

Cypress.Commands.add('submitSalary', (salary, tabName) => {
    cy.get('a[aria-selected="true"]').contains(tabName);
    cy.get('.tab-pane.active.card-body input').type(salary);
    cy.get('.tab-pane.active.card-body .btn-primary').click();
});

Cypress.Commands.add('mockWeatherRequest', () => {
    cy.server();
    cy.route({
        method: 'GET',
        url: /openweathermap/,
        response: weatherLondon,
        delay: 500,
    });
});
