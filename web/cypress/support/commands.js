import 'cypress-real-events'
import './commands/consultancy_commands'
import './commands/login_commands'

Cypress.Commands.add('start', () => {
  cy.visit('/')
})

Cypress.Commands.add('goTo', (buttonName, pageTitle) => {
  cy.contains('button', buttonName)
    .should('be.visible')
    .click()

  cy.contains('h1', pageTitle).should('be.visible')
})

