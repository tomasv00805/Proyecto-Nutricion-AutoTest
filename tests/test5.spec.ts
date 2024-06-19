
import { test, expect } from '@playwright/test';
 
test('Verificar que se visualizan los graficos de las repuestas', async ({ page }) => {
  
    // Navegar a la página del test
    await page.goto('https://proyecto-nutricion-frontend-5o3s.vercel.app/responses');
  

  // Esperar a que se cargue el gráfico y la imagen del gráfico
  await Promise.all([
    page.waitForSelector('.radar-title'),
    page.waitForSelector('.radar-graphic canvas'), // Selector para la imagen del gráfico
  ]);

  // Validar que el gráfico y la imagen del gráfico están presentes
  const chartTitle = await page.$('.radar-title');
  const chartGraphic = await page.$('.radar-graphic canvas'); // Elemento canvas que representa la imagen del gráfico
  expect(chartTitle).not.toBeNull();
  expect(chartGraphic).not.toBeNull();

  // Capturar la pantalla completa
  await page.screenshot({ path: 'fullpage.png', fullPage: true });

  // Esperar un tiempo adicional para asegurar la captura de pantalla (opcional)
  await page.waitForTimeout(1000);
  
    // Cerrar el navegador
    await page.close();

  });
