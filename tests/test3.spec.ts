import { test, expect } from '@playwright/test';

test('Verificar que aparezca el mensaje de gracias al rellenar el formulario', async ({ page }) => {

  // Navega a la página con el botón
  await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');

  // Espera a que el botón esté visible
  await page.waitForSelector('#create-response-button');

  // Haz clic en el botón
  await page.click('#create-response-button');

  // Espera a que la nueva página se cargue
  await page.waitForLoadState('load');

  
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
  await page.getByRole('button', { name: 'Enviar' }).click();
  
    // ---------------------
    

  // Ajusta el selector del botón que envía el formulario


  // Espera a que la ventana emergente esté visible
  await page.waitForSelector('.modal-dialog', { state: 'visible' });

  // Verifica que el título de la ventana emergente sea "Gracias!"s
  await page.waitForTimeout(5000);
  const modalTitle = await page.textContent('.modal-title');
  expect(modalTitle).toBe('Gracias!');

  // Verifica que el cuerpo de la ventana emergente contenga el mensaje esperado
  const modalBody = await page.textContent('.modal-body p');
  expect(modalBody).toBe('Tu respuesta fue guardada satisfactoriamente!');

  // Verifica que el botón en el pie de la ventana emergente contenga el texto esperado
  const modalFooterButton = await page.textContent('.modal-footer button span');
  expect(modalFooterButton).toBe('Más Sobre Nosotros!');
});
