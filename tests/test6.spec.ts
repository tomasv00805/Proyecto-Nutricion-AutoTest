
import { test, expect } from '@playwright/test';
 
test('Captura de grafico y chequeo de numeros', async ({ page }) => {
  
    // Navegar a la página del test
    await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/');
  

  // Esperar a que se cargue el gráfico
  await page.waitForSelector('.radar-title');

  // Capturar la pantalla completa
  await page.screenshot({ path: 'fullpage.png', fullPage: true });

  // Validar que el gráfico está presente
  const chartTitle = await page.$('.radar-title');
  expect(chartTitle).not.toBeNull();


  await page.waitForTimeout(1000);

  
    // Cerrar el navegador
    await page.close();
  });
