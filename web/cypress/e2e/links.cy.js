describe('Links abrindo nova guia/janela', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Validando o atributo do link do Instagram', () => {
    cy.get('[data-cy="instagram-link"]')
      .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
      .and('have.attr', 'target', '_blank')
  })

  it('Acessa link de Termos de uso removendo o Target Blank', () => {
    cy.goTo('Formulários', 'Consultoria')

    cy.contains('a', 'termos de uso')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'Termos de Uso').should('be.visible')
    cy.contains('h2', '1. Aceitação dos Termos').should('be.visible')
  })
})