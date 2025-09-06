import { test, expect } from '@playwright/test';

test('Deve buscar por "Pacto Soluções" no Yahoo e validar os resultados', async ({ page, browserName }) => {
  test.setTimeout(120000);
  
  await page.goto('https://br.search.yahoo.com/', { 
    waitUntil: 'load',
    timeout: 90000 
  });
  
  const waitTime = browserName === 'webkit' || browserName === 'chromium' ? 5000 : 3000;
  await page.waitForTimeout(waitTime);

  const searchInput = page.locator('input[name="p"], input[type="search"], #yschsp').first();
  console.log('🔍 Preenchendo campo de busca com "Pacto Soluções"...');
  await searchInput.fill('Pacto Soluções');
  await page.waitForTimeout(1000);

  console.log('⌨️ Pressionando Enter para buscar...');
  await searchInput.press('Enter');

  try {
    await page.waitForLoadState('networkidle', { timeout: 30000 });
  } catch (e) {
    await page.waitForTimeout(3000);
  }

  console.log('Verificando se a URL contém os parâmetros da busca...');
  await expect(page).toHaveURL(/.*pacto.*solu.*(c3%a7|%c3%a7|ç).*(c3%b5|%c3%b5|õ).*es/i);
  console.log('URL validada com sucesso!');

  console.log('Procurando resultados da busca na página...');
  const searchResults = page.locator('[data-bm="1"], .algo, .compTitle, .dd.algo, .g');
  await expect(searchResults.first()).toBeVisible({ timeout: 10000 });
  
  console.log('SUCESSO! Busca por "Pacto Soluções" realizada no Yahoo!');
  console.log('Aguardando para visualização...');
  await page.waitForTimeout(2000);
});