import { test, expect, chromium } from '@playwright/test';

test('Verificar que funcione el range de las barras de respuesta', async ({ page }) => {
  // Navega a la página con el botón
  await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');
  
  // Espera a que el botón esté visible y haz clic en él
  await page.waitForSelector('#create-response-button', { timeout: 6000 });
  await page.click('#create-response-button');

  // Espera a que la nueva página se cargue completamente
  await page.waitForLoadState('load');

  // Genera un número aleatorio entre 1 y 100
  const getRandomValue = () => Math.floor(Math.random() * 100) + 1;

  // Asigna valores aleatorios a los sliders
  await page.getByLabel('No me gusta', { exact: true }).check();
  await page.locator('div').filter({ hasText: /^SaborMe desagradaMe agrada$/ }).getByRole('slider').fill(getRandomValue().toString());
  await page.locator('input[name="aroma"]').fill(getRandomValue().toString());
  await page.locator('input[name="textura"]').fill(getRandomValue().toString());
  await page.locator('input[name="crocante"]').fill(getRandomValue().toString());
  await page.locator('input[name="forma"]').fill(getRandomValue().toString());
  await page.locator('input[name="color"]').fill(getRandomValue().toString());
  await page.locator('input[name="tamaño"]').fill(getRandomValue().toString());

  // Envía el formulario
  await page.getByRole('button', { name: 'Enviar' }).click();


});