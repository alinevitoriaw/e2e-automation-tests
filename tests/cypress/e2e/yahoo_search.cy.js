describe('Teste de busca no Yahoo', () => {
  it('Deve buscar por "Pacto Soluções" e validar os resultados', () => {
    cy.log('🌐 Carregando página do Yahoo...')
    cy.visit('https://br.search.yahoo.com/')

    cy.log('🔍 Preenchendo campo de busca com "Pacto Soluções"...')
    cy.get('input[name="p"], input[type="search"]').first().type('Pacto Soluções')
    
    cy.wait(1000)
    
    cy.log('⌨Pressionando Enter para buscar...')
    cy.get('input[name="p"], input[type="search"]').first().type('{enter}')

    cy.log('Verificando se a busca foi realizada...')
    cy.url().should('include', 'search')

    cy.log('Procurando resultados da busca na página...')
    cy.get('.algo, .compTitle, [data-bm], .g').should('be.visible')
    
    cy.log('SUCESSO! Busca por "Pacto Soluções" realizada no Yahoo!')
    cy.wait(2000)
  })
})