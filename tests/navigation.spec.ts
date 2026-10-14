import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../pages/pageObjectManager';

test('Get into the Forms menus', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  const pom = new PageObjectManager(page)

  await pom.navigationPage.formSubMenuItem('Form Layouts')
  await pom.navigationPage.formSubMenuItem('Datepicker')
});

test('Get into the Modal & Overlays menus', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  const pom = new PageObjectManager(page)

  await pom.navigationPage.modalOverlaysSubMenuItem('Dialog')
  await pom.navigationPage.modalOverlaysSubMenuItem('Window')
  await pom.navigationPage.modalOverlaysSubMenuItem('Popover')
  await pom.navigationPage.modalOverlaysSubMenuItem('Toastr')
  await pom.navigationPage.modalOverlaysSubMenuItem('Tooltip')
});

test('Get into the Extra Components menus', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  const pom = new PageObjectManager(page)

  await pom.navigationPage.extraComponentsSubMenuItem('Calendar')
  await pom.navigationPage.extraComponentsSubMenuItem('Drag & Drop')
  await pom.navigationPage.extraComponentsSubMenuItem('PDF Download')
});

test('Get into the Charts menu', async ({page}) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  const pom = new PageObjectManager(page)

  await pom.navigationPage.chartsSubMenuItem('Echarts')
})

test('Get into the Tables & Data menus', async ({page}) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  const pom = new PageObjectManager(page)

  await pom.navigationPage.tablesDataSubMenuItem('Smart Table')
  await pom.navigationPage.tablesDataSubMenuItem('Tree Grid')
})

test('Get into the Auth menus', async ({page}) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  const pom = new PageObjectManager(page)

  await pom.navigationPage.authSubMenuItem('Login')
  await pom.arrowBackFromAuthSubMenus.click()
  await pom.navigationPage.authSubMenuItem('Register')
  await pom.arrowBackFromAuthSubMenus.click()
  await pom.navigationPage.authSubMenuItem('Request Password')
  await pom.arrowBackFromAuthSubMenus.click()
  await pom.navigationPage.authSubMenuItem('Reset Password')
  await pom.arrowBackFromAuthSubMenus.click()
})

test('Changing the background color', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  const pom = new PageObjectManager(page)

  await pom.navigationPage.changeColorTheme('Dark')
  await pom.navigationPage.changeColorTheme('Cosmic')
  await pom.navigationPage.changeColorTheme('Corporate')
  await pom.navigationPage.changeColorTheme('Light')
});

test.skip('Testing the test.step/@step decorator - must fail', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/forms/datepicker');

  const pom = new PageObjectManager(page)
  await pom.navigationPage.menuItemsParentLocator.click()
  await page.waitForTimeout(1100)
  await pom.navigationPage.menuHamburguerToColapseOrExpended.click()
  await page.waitForTimeout(1100)
  await pom.navigationPage.formSubMenuItem('Error')
});