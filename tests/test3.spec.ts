import { test, expect } from '@playwright/test';

test('test3', async ({ page }) => {
  // Navigate to the page with the button
  await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');

  // Espera a que el botón esté visible
  await page.waitForSelector('#create-response-button');

  // Haz clic en el botón
  await page.click('#create-response-button');

  // Espera a que la nueva página se cargue
  await page.waitForLoadState('load');

  // Verifica que la URL es la esperada
  await expect(page).toHaveURL('https://proyecto-nutricion-frontend-5o3s.vercel.app/form');
});