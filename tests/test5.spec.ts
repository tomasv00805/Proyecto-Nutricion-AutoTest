import { test, expect } from '@playwright/test';

test('test5', async ({ page }) => {
  // Navega a la página con el botón
  await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');
  
  // Espera a que el span con el número inicial esté visible
  await page.waitForSelector('#cant-respuestas');
  
  await page.waitForTimeout(5000);
  // Obtén el valor del número dentro del span
  const valorInicial = await page.textContent('#cant-respuestas');
  if (valorInicial === null) {
    throw new Error('No se pudo obtener el contenido inicial del span.');
  }
  const numeroInicial = parseInt(valorInicial, 10);
  console.log(`Valor inicial: ${numeroInicial}`);
  
  // Espera a que el botón esté visible y haz clic en él
  await page.waitForSelector('#create-response-button', { timeout: 6000 });
  await page.click('#create-response-button');

  // Espera a que la nueva página se cargue completamente
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

  // Espera a que la ventana emergente esté visible y contenga el texto "Gracias!"
  await page.waitForSelector('.modal-dialog', { state: 'visible', timeout: 15000 });

  const modalTitle = await page.locator('.modal-title');
  
  // Verifica que el título de la ventana emergente sea "Gracias!"
  await page.waitForFunction(
    () => {
      const title = document.querySelector('.modal-title')?.textContent;
      return title === 'Gracias!';
    },
    { timeout: 15000 }
  );
  const titleText = await modalTitle.textContent();
  expect(titleText).toBe('Gracias!');

  // Verifica que el cuerpo de la ventana emergente contenga el mensaje esperado
  const modalBody = await page.textContent('.modal-body p');
  expect(modalBody).toBe('Tu respuesta fue guardada satisfactoriamente!');

  // Verifica que el botón en el pie de la ventana emergente contenga el texto esperado
  const modalFooterButton = await page.textContent('.modal-footer button span');
  expect(modalFooterButton).toBe('Más Sobre Nosotros!');
  
  // Recarga la página
  await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');
  await page.waitForSelector('#cant-respuestas');
  await page.waitForTimeout(5000);
  // Vuelve a obtener el valor del número dentro del span después de recargar
  const valorRecargado = await page.textContent('#cant-respuestas');
  if (valorRecargado === null) {
    throw new Error('No se pudo obtener el contenido del span después de recargar.');
  }
  const numeroRecargado = parseInt(valorRecargado, 10);
  console.log(`Valor después de recargar: ${numeroRecargado}`);

  // Compara los dos valores
  expect(numeroRecargado).toBeGreaterThan(numeroInicial);
});
