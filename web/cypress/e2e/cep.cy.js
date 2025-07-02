const address = require('../fixtures/cep.json')

describe('CEP', () => {
  beforeEach(() => {
    cy.login()
    cy.goTo('Integração', 'Consulta de CEP')
  })

  it('Interceptando requisição http', () => {
    cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
      statusCode: 200,
      body: {
        logradouro: address.street,
        bairro: address.neighborhood,
        localidade: address.city,
        uf: address.state
      }

    }).as('getCep')

    cy.get('#cep').type(address.cep)
    cy.contains('button', 'Buscar').click()

    cy.wait('@getCep')

    cy.get('#street')
      .should('be.visible')
      .and('have.value', address.street)

    cy.get('#neighborhood')
      .should('be.visible')
      .and('have.value', address.neighborhood)

    cy.get('#city')
      .should('be.visible')
      .and('have.value', address.city)

    cy.get('#state')
      .should('be.visible')
      .and('have.value', address.state)
  })

})

