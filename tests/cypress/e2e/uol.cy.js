describe('Segurança na UOL', () => {
  it('deve encontrar a data de atualização dos termos de segurança', () => {
    cy.log('Carregando DIRETAMENTE a página de termos da UOL...')
    cy.log('Navegando para: https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade/')
    
    cy.visit('https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade/', {
      timeout: 60000
    });
    
    cy.log('Aguardando carregamento da página de termos...')
    cy.wait(3000)
    
    cy.log('🔍 Verificando se chegamos na página correta...')
    cy.url().should('include', 'normas-de-seguranca-e-privacidade')
    
    cy.log('🔍 URL atual confirmada!')
    cy.url().then((url) => {
      cy.log('URL atual: ' + url)
    })
    
    cy.log('=== DEMONSTRAÇÃO PARA ENTREVISTA ===')
    cy.log('Conseguimos carregar a página de termos da UOL!')
    cy.log('URL atual visível no browser')
    cy.log('⏱AGUARDE - Demonstrando navegação por 5 segundos...')
    
    cy.wait(5000)
    
    cy.log('Agora vamos procurar dados de atualização...')
    
    cy.log('Procurando por datas específicas de atualização...')

    cy.get('body').then($body => {
      const content = $body.text();

      const datePatterns = [
        /\d{1,2}\s+de\s+\w+\s+de\s+\d{4}/gi,
        /\d{1,2}\/\d{1,2}\/\d{4}/gi
      ];
      
      let dateFound = false;
      let foundDate = '';
      
      for (const pattern of datePatterns) {
        const matches = content.match(pattern);
        if (matches && matches.length > 0) {
          foundDate = matches[0];
          dateFound = true;
          break;
        }
      }
      
      if (dateFound) {
        cy.log('SUCESSO! Data de atualização encontrada:')
        cy.log('Data encontrada: ' + foundDate)
        cy.log('OBSERVE: A data será destacada em AMARELO na tela!')

        cy.get('body').invoke('html').then((html) => {
          const highlightedHtml = html.replace(
            new RegExp(foundDate.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), 
            `<span style="background-color: yellow; border: 3px solid red; padding: 5px; font-weight: bold; font-size: 16px;">${foundDate}</span>`
          );
          cy.get('body').invoke('html', highlightedHtml);
        });
        
        cy.wait(2000)

        cy.contains(foundDate).should('be.visible').scrollIntoView({ duration: 1000 });
        
      } else {
        cy.log('🔍 Não encontrou data específica, procurando por anos...')
        const yearMatches = content.match(/20\d{2}/g);
        if (yearMatches) {
          const latestYear = Math.max(...yearMatches.map(year => parseInt(year)));
          cy.log('Ano mais recente encontrado nos termos: ' + latestYear)
          cy.log('Isso indica que os termos são atuais (posterior a 2020)')
          expect(latestYear).to.be.gte(2020);
        }
      }
    });
    
    cy.log('TESTE CONCLUÍDO - Validação de termos da UOL realizada!')
    cy.log('Observe na tela: o texto encontrado está destacado em AMARELO!')
    cy.log('Aguardando 6 segundos para visualização final...')
    cy.wait(6000)
  });
});