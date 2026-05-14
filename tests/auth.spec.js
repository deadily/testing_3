const { test, expect } = require('@playwright/test');
const { login } = require('./helpers');

test.describe('Авторизация', () => {
  
    test('Позитив: Вход как работодатель', async ({ page }) => {
        await page.goto('https://dev.profteam.su/login');
        await page.waitForTimeout(2000);
        
        const loginField = page.locator('input[autocomplete="username"], input[name="login"], input[type="text"]').first();
        await loginField.fill('testerEmployer');
        
        const passwordField = page.locator('input[autocomplete="current-password"], input[name="password"], input[type="password"]').first();
        await passwordField.fill('Password1');
        
        const submitButton = page.locator('button:has-text("Войти"), button[type="submit"]').first();
        await submitButton.click();
        
        await page.waitForTimeout(3000);
        expect(page.url()).not.toContain('login');
    });

    test('Негатив: Неверный пароль', async ({ page }) => {
        await page.goto('https://dev.profteam.su/login');
        await page.waitForTimeout(1000);
        
        await page.locator('input[autocomplete="username"], input[name="login"]').first().fill('testerEmployer');
        await page.locator('input[autocomplete="current-password"], input[name="password"]').first().fill('WrongPass123');
        await page.locator('button:has-text("Войти"), button[type="submit"]').first().click();
        await page.waitForTimeout(2000);
        
        expect(page.url()).toContain('login');
    });

});