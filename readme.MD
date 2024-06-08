# Playwright: Guía de Inicio Rápido

## Introducción

**Playwright** es una herramienta de automatización de pruebas que te permite interactuar con navegadores web (como Chrome, Firefox y WebKit) para realizar pruebas funcionales, capturar capturas de pantalla, simular eventos del usuario y más. A continuación, se detallan los pasos para comenzar con Playwright.

## Instalación

1. **Iniciar un nuevo proyecto**:
   Para comenzar, crea un nuevo directorio para tu proyecto y ejecuta el siguiente comando para inicializar un proyecto de Playwright:

   ```bash
   npm init playwright@latest
   ```

   Esto creará una estructura básica de proyecto con las dependencias necesarias.

2. **Comandos Básicos**:
   - **Ejecutar pruebas en Chrome**:
     Para ejecutar tus pruebas solo en Chrome, utiliza el siguiente comando:

     ```bash
     npx playwright test --project=chromium
     ```

   - **Ejecutar pruebas en modo "headed"**:
     Si deseas ver la interfaz gráfica del navegador mientras se ejecutan las pruebas, usa:

     ```bash
     npx playwright test --headed
     ```

   - **Modo de depuración**:
     Para depurar tus pruebas, puedes ejecutarlas en modo de depuración:

     ```bash
     npx playwright test --debug
     ```

   - **Utilizar un solo archivo de prueba**:
     Puedes ejecutar una prueba específica utilizando:

     ```bash
     npx playwright test my-test-file.spec.js
     ```

3. **Localizadores (Locators)**:
   Playwright proporciona varios métodos para localizar elementos en la página:
   - `locate('#id')`: Busca un elemento por su ID.
   - `locate('.class')`: Busca un elemento por su clase.
   - `$`: Abreviatura para `page.locator()`.
   - `$$`: Abreviatura para `page.locator().findAll()`.

4. **Asertos (Assertions)**:
   Puedes usar asertos para verificar condiciones en tus pruebas:
   - `expect(element).toContain('texto')`: Verifica si el elemento contiene el texto especificado.
   - `expect(element).toHaveText('texto esperado')`: Verifica si el texto del elemento coincide con el esperado.

## Ejemplo de Prueba

Ejemplo básico de una prueba utilizando Playwright:

```javascript
const { test, expect } = require('@playwright/test');

test('Ejemplo de prueba', async ({ page }) => {
  await page.goto('https://www.example.com');
  const title = await page.title();
  expect(title).toContain('Example Domain');
});
```
