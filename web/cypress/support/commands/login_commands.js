import { getTodayDate } from '../utils'

Cypress.Commands.add('login', (ui = false) => {
  if (ui == true) {
    cy.start()
    cy.submitLogin('papito@webdojo.com', 'katana123')
  } else {
    const token = 'e1033d63a53fe66c0fd3451c7fd8f617'
    const loginDate = getTodayDate()

    cy.setCookie('login_date', loginDate)
    cy.visit('/dashboard', {
      onBeforeLoad(win) {
        win.localStorage.setItem('token', token)
      }
    })
  }
})

Cypress.Commands.add('submitLogin', (email, senha) => {
  cy.get('#email').type(email)
  cy.get('#password').type(senha)

  cy.contains('button', 'Entrar').click()
})