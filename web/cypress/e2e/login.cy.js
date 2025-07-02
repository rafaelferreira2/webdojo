import { getTodayDate } from '../support/utils'

describe('Login', () => {

  it('Deve logar com sucesso', () => {
    cy.start()
    cy.submitLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

    cy.getCookie('login_date').should('exist')

    cy.getCookie('login_date').should((cookie) => {
      expect(cookie.value).to.eq(getTodayDate())
    })

    cy.window().then((win) => {
      const token = win.localStorage.getItem('token')
      expect(token).to.exist
    })
  })

  it('Não deve logar com senha inválida', () => {
    cy.start()
    cy.submitLogin('papito@webdojo.com', 'katana321')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

  it('Não deve logar com email não cadastrado', () => {
    cy.start()
    cy.submitLogin('not_found@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})