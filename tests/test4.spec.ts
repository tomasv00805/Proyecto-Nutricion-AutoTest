import { test, expect } from '@playwright/test';

test('test4', async ({ page }) => {

  // Navega a la página con el botón
  await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');

  // Espera a que el botón esté visible
  await page.waitForSelector('#create-response-button');

  // Haz clic en el botón
  await page.click('#create-response-button');

  // Espera a que la nueva página se cargue
  await page.waitForLoadState('load');

  const { chromium } = require('playwright');

  (async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    await page.getByLabel('No me gusta', { exact: true }).check();
    await page.locator('div').filter({ hasText: /^SaborMe desagradaMe agrada$/ }).getByRole('slider').fill('37');
    await page.locator('input[name="aroma"]').fill('63');
    await page.locator('input[name="textura"]').fill('41');
    await page.locator('input[name="crocante"]').fill('27');
    await page.locator('input[name="forma"]').fill('84');
    await page.locator('input[name="color"]').fill('15');
    await page.locator('input[name="tamaño"]').fill('71');
    await page.getByRole('button', { name: 'Enviar' }).click();
  
    // ---------------------
    
  })();
  // Ajusta el selector del botón que envía el formulario

  await page.waitForTimeout(2500);
  // Espera a que la ventana emergente esté visible
  await page.waitForSelector('.modal-dialog', { state: 'visible' });

  // Verifica que el título de la ventana emergente sea "Gracias!"s
  const modalTitle = await page.textContent('.modal-title');
  expect(modalTitle).toBe('Gracias!');

  // Verifica que el cuerpo de la ventana emergente contenga el mensaje esperado
  const modalBody = await page.textContent('.modal-body p');
  expect(modalBody).toBe('Tu respuesta fue guardada satisfactoriamente!');

  // Verifica que el botón en el pie de la ventana emergente contenga el texto esperado
  const modalFooterButton = await page.textContent('.modal-footer button span');
  expect(modalFooterButton).toBe('Más Sobre Nosotros!');
});
