
import { test, expect } from '@playwright/test';

test('Test incremento index', async ({ page }) => {
 
  // Abrir la página
  await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');
  
  
  await page.waitForTimeout(800); 

  // Obtener el número inicial de respuestas
  const initialResponseCount = await page.textContent('total-responses');

  // Esperar un breve momento para que se reflejen los cambios
  await page.waitForTimeout(1000); 

  // Obtener el número actualizado de respuestas
  const updatedResponseCount = await page.textContent('total-responses');



});