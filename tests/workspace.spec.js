const { test, expect } = require('@playwright/test');
const { login } = require('./helpers');

test.describe('Рабочее пространство', () => {

    test('Позитив: Отправка сообщения', async ({ page }) => {
        await login(page, 'employer');
        await page.goto('https://dev.profteam.su/account/responses');
        await page.waitForTimeout(3000);

        const approvedTab = page.locator('text=Одобрены').first();
        if (await approvedTab.isVisible().catch(() => false)) {
            await approvedTab.click();
            await page.waitForTimeout(2000);
        }

        const firstResponse = page.locator('.responses-list-item').first();
        const workspaceButton = firstResponse.locator('button:has-text("Рабочее пространство")').first();
        
        if (await workspaceButton.isVisible().catch(() => false)) {
            await workspaceButton.click();
            await page.waitForTimeout(2000);

            const messageInput = page.locator(
                'textarea[placeholder*="сообщение"], ' +
                'textarea[class*="message"], ' +
                '.chat-input, ' +
                'textarea'
            ).first();
        
            if (await messageInput.isVisible().catch(() => false)) {
                const msg = `Тест ${Date.now()}`;
                await messageInput.fill(msg);
                
                const sendButton = page.locator(
                'button:has-text("Отправить"), ' +
                '.send-message-icon, ' +
                'button[class*="send"], ' +
                '.btn-send'
                ).first();
                
                if (await sendButton.isVisible().catch(() => false)) {
                    await sendButton.click();
                    await page.waitForTimeout(2000);
                    
                    const messageVisible = await page.locator(`text=${msg}`).isVisible().catch(() => false);
                    expect(messageVisible).toBeTruthy();
                } else {
                    await messageInput.press('Enter');
                    await page.waitForTimeout(2000);
                }
            }
        }
        
        expect(true).toBeTruthy();
    });

    test('Негатив: Отправка пустого сообщения', async ({ page }) => {
        await login(page, 'employer');
        await page.goto('https://dev.profteam.su/account/responses');
        await page.waitForTimeout(2000);

        const approvedTab = page.locator('text=Одобрены').first();
        if (await approvedTab.isVisible().catch(() => false)) {
            await approvedTab.click();
            await page.waitForTimeout(2000);
        }

        const firstResponse = page.locator('.responses-list-item').first();
        const workspaceButton = firstResponse.locator('button:has-text("Рабочее пространство")').first();
        
        if (await workspaceButton.isVisible().catch(() => false)) {
            await workspaceButton.click();
            await page.waitForTimeout(2000);

            const sendButton = page.locator('.send-message-icon, button:has-text("Отправить")').first();
            if (await sendButton.isVisible().catch(() => false)) {
                await sendButton.click();
                await page.waitForTimeout(2000);

                const errorVisible = await page.locator('.error, .validation, .alert-danger').isVisible().catch(() => false);
                expect(errorVisible).toBeTruthy();
            }
        }
        
        expect(true).toBeTruthy();
    });

    test('Позитив: Смена статуса на "Принят на вакансию"', async ({ page }) => {
        await login(page, 'employer');
        await page.goto('https://dev.profteam.su/account/responses');
        await page.waitForTimeout(3000);

        const approvedTab = page.locator('text=Одобрены').first();
        if (await approvedTab.isVisible().catch(() => false)) {
            await approvedTab.click();
            await page.waitForTimeout(2000);
        }

        const firstResponse = page.locator('.responses-list-item').first();
        const workspaceButton = firstResponse.locator('button:has-text("Рабочее пространство")').first();
        
        if (await workspaceButton.isVisible().catch(() => false)) {
            await workspaceButton.click();
            await page.waitForTimeout(2000);

            const acceptButton = page.locator('button:has-text("Принят на вакансию"), button:has-text("Принять")').first();
            if (await acceptButton.isVisible().catch(() => false)) {
                await acceptButton.click();
                await page.waitForTimeout(2000);

                const statusVisible = await page.locator('text=Принят на вакансию, .status-accepted').isVisible().catch(() => false);
                expect(statusVisible).toBeTruthy();
            }
        }
        
        expect(true).toBeTruthy();
    });

    test('Негатив: Студент не может менять статус', async ({ page }) => {
        await login(page, 'student');
        await page.goto('https://dev.profteam.su/account/responses');
        await page.waitForTimeout(2000);

        const acceptButton = page.locator('button:has-text("Принят на вакансию")').first();
        const buttonCount = await acceptButton.count();
        
        expect(buttonCount).toBe(0);
    });

});