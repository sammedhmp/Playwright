const { test, expect } = require('@playwright/test');


test.only('Deom', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  await expect(page).toHaveTitle('Swag Labs');

  await page.locator('#user-name').fill('standard_user');

  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.locator('//input[@id="login-button"]').click();

  await page.screenshot({ path: 'tests/screenshots/' + 'home page.png' });

  // await page.screenshot({path:'home page'+Date.now()})

  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert')
  });

  if (page.locator('.duct_sort_container').isVisible) {
    // console.log("not found")
  } else

    await page.locator('.product_sort_container').click();
  await page.locator('.product_sort_container').selectOption('Price (low to high)');

  await page.screenshot({ path: 'tests/screenshots/' + 'Price.png', fullPage: true });

  await expect(page.locator('//div[text()="7.99"]')).toContainText('7.99');

  await page.locator('//div[@id="inventory_container"]/div/div[1]/div[3]/button').click();

  await page.locator('#shopping_cart_container').click();

  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Onesie');

  await page.locator('.btn_secondary.cart_button').click();
}
);

