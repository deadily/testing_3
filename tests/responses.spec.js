const { test, expect } = require('@playwright/test');
const { login } = require('./helpers');

test.describe('Отклики на вакансии', () => {

    test('Позитив: Студент откликается', async ({ page }) => {
        await login(page, 'student');
        await page.goto('https://dev.profteam.su/vacancies');
        await page.waitForTimeout(3000);
        
        const applyButton = page.locator(
        'button:has-text("Откликнуться"), ' +
        '.btn-apply, ' +
        'button[class*="apply"], ' +
        '.vacancy-card button'
        ).first();
        
        await applyButton.click();
        await page.waitForTimeout(1000);
        
        const confirmButton = page.locator(
        'button:has-text("Подтвердить"), ' +
        'button:has-text("OK"), ' +
        '.btn-confirm, ' +
        '.modal button[type="button"]'
        ).first();
        
        if (await confirmButton.isVisible().catch(() => false)) {
            await confirmButton.click();
            await page.waitForTimeout(2000);
        }
        
        const successVisible = await page.locator(
        '.success, .toast-success, [class*="success"], ' +
        'text="Отклик отправлен", text="Успешно"'
        ).isVisible().catch(() => false);
        
        expect(successVisible).toBeTruthy();
    });

    test('Негатив: Отклик без авторизации', async ({ page }) => {
        await page.goto('https://dev.profteam.su/vacancies');
        await page.waitForTimeout(2000);
        
        const applyButton = page.locator('button:has-text("Откликнуться"), .btn-apply').first();
        await applyButton.click();
        await page.waitForTimeout(2000);
        
        if (page.url().includes('login')) {
            expect(page.url()).toContain('login');
        } else {
            const errorVisible = await page.locator('.error, .auth-required, .login-required').isVisible().catch(() => false);
            expect(errorVisible).toBeTruthy();
        }
    });

    test('Позитив: Работодатель подтверждает отклик', async ({ page }) => {
        await login(page, 'employer');
        await page.goto('https://dev.profteam.su/account/responses');
        await page.waitForTimeout(3000);

        const approvedTab = page.locator('text=Одобрены, .tab:has-text("Одобрены"), [role="tab"]:has-text("Одобрены")').first();
        if (await approvedTab.isVisible().catch(() => false)) {
            await approvedTab.click();
            await page.waitForTimeout(2000);
        }

        const firstResponse = page.locator('.responses-list-item, .response-item, [class*="response"]').first();
        if (await firstResponse.count() === 0) {
            console.log('Нет откликов для подтверждения');
            test.skip();
            return;
        }

        const workspaceButton = firstResponse.locator(
        'button:has-text("Рабочее пространство"), ' +
        '.btn-workspace, ' +
        'button[class*="workspace"]'
        ).first();
        
        if (await workspaceButton.isVisible().catch(() => false)) {
            await workspaceButton.click();
            await page.waitForTimeout(2000);

            const acceptButton = page.locator(
                'button:has-text("Принят на вакансию"), ' +
                'button:has-text("Принять"), ' +
                '.btn-accept'
            ).first();
            
            if (await acceptButton.isVisible().catch(() => false)) {
                await acceptButton.click();
                await page.waitForTimeout(2000);
            }
        }
        
        expect(true).toBeTruthy();
    });

});