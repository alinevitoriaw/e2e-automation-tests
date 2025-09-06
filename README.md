# 🚀 Teste Automatizado - Pacto Soluções

Projeto de automação de testes desenvolvido para validar funcionalidades de busca e verificação de políticas de segurança.

## 📋 Requisitos Implementados

### 1. Busca no Yahoo
- **Objetivo**: Buscar "Pacto Soluções" no Yahoo e validar se a busca está funcionando corretamente
- **Validações**: URL de resultados, presença de resultados de busca

### 2. Verificação de Termos de Segurança - UOL
- **Objetivo**: Acessar termos de segurança da UOL e encontrar data de última atualização
- **Validações**: Navegação para página de termos, identificação de data específica ("21 de julho de 2021")

## 🛠 Tecnologias Utilizadas

- **Playwright** - Framework de automação multi-browser
- **Cypress** - Framework de testes E2E
- **Node.js** - Runtime JavaScript
- **JavaScript** - Linguagem de programação

## 📁 Estrutura do Projeto

```
teste-automacao-pacto/
├── tests/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── yahoo_search.cy.js     # Teste busca Yahoo
│   │   │   └── uol.cy.js              # Teste termos UOL
│   │   └── support/
│   │       └── e2e.js
│   └── playwright/
│       └── e2e/
│           ├── yahoo_search.spec.js    # Teste busca Yahoo
│           └── uol_privacy_policy.spec.js # Teste termos UOL
├── cypress.config.js                  # Configuração Cypress
├── playwright.config.js               # Configuração Playwright
├── package.json                       # Dependências do projeto
└── README.md                         # Este arquivo
```

## 🚀 Como Executar os Testes

### Pré-requisitos
```bash
npm install
```

### Playwright (Recomendado para demonstração)
```bash
# Executar todos os testes em todos os browsers
npx playwright test --headed

# Executar apenas Yahoo
npx playwright test yahoo_search --project=firefox --headed

# Executar apenas UOL
npx playwright test uol_privacy_policy --project=firefox --headed
```

### Cypress
```bash
# Interface gráfica (melhor para demonstração)
npx cypress open

# Linha de comando
npx cypress run --spec "tests/cypress/e2e/yahoo_search.cy.js" --headed --no-exit
npx cypress run --spec "tests/cypress/e2e/uol.cy.js" --headed --no-exit
```

## ✨ Funcionalidades Especiais

- **🎯 Destaque Visual**: Datas de atualização são destacadas em amarelo na página
- **📱 Multi-browser**: Testes executam em Chromium, Firefox e WebKit
- **📝 Logs Detalhados**: Cada passo é logado com emojis para fácil acompanhamento
- **⏱️ Pausas Visuais**: Demonstrações incluem pausas para melhor visualização
- **🔄 Estratégias Robustas**: Múltiplas tentativas de navegação para maior confiabilidade

## 🎬 Demonstração

Os testes incluem pausas visuais e logs detalhados, ideais para demonstrações ao vivo:

1. **Yahoo**: Mostra preenchimento do campo, submissão e validação de resultados
2. **UOL**: Navega para página de termos e destaca visualmente a data encontrada

## 🔍 Validações Implementadas

### Teste Yahoo
- ✅ Carregamento da página de busca
- ✅ Preenchimento do campo de pesquisa
- ✅ Submissão da busca
- ✅ Validação da URL de resultados
- ✅ Presença de resultados de busca

### Teste UOL
- ✅ Navegação para página de termos de segurança
- ✅ Localização de data específica de atualização
- ✅ Destaque visual da data encontrada
- ✅ Validação de conteúdo relevante

## 📊 Resultados

Ambos os testes estão funcionando com 100% de sucesso:
- **Data encontrada**: "21 de julho de 2021"
- **Browsers compatíveis**: Chromium, Firefox, WebKit
- **Tempo médio de execução**: ~30 segundos por framework

## 🔧 Configurações

### Playwright
- Timeout de navegação: 120 segundos
- Timeout de ações: 60 segundos
- Modo headed habilitado por padrão para demonstrações

### Cypress
- Timeout de página: 60 segundos
- Navegação direta para página de termos
- Logs visuais habilitados

---

**Desenvolvido por**: Aline Nunes  
**Data**: Setembro 2025  
**Propósito**: Teste Prático de QA
