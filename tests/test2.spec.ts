
import { test, expect } from '@playwright/test';

test('Verificacion del range', async ({ page }) => {
  
  // Navegar a la página
  await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');

   // Esperar a que el formulario esté visible
   await page.waitForSelector('.container-form');

     // Espera a que la nueva página se cargue
  await page.waitForLoadState('load');

   const { chromium } = require('playwright');

   (async () => {
     const browser = await chromium.launch({
       headless: false
     });

   // Obtener los selectores de los rangos
   const context = await browser.newContext();
   await page.locator('div').filter({ hasText: /^SaborMe desagradaMe agrada$/ }).getByRole('slider').fill('37');
   await page.locator('input[name="aroma"]').fill('63');
   await page.locator('input[name="textura"]').fill('41');
   await page.locator('input[name="crocante"]').fill('27');
   await page.locator('input[name="forma"]').fill('84');
   await page.locator('input[name="color"]').fill('15');
   await page.locator('input[name="tamaño"]').fill('71');

  })();

   // Enviar el formulario
   await page.click('button[type="submit"]');
   
   //esperar que aparezca el mensaje de gracias
 
   const modalTitle = await page.textContent('.modal-title');
   expect(modalTitle).toBe('Gracias!');
 
 
  // Cerrar el navegador
  await page.close();

  // Verifica que la URL es la esperada
  await expect(page).toHaveURL('https://proyecto-nutricion-frontend-5o3s.vercel.app/form');

});

