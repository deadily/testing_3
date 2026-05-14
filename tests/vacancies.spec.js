const { test, expect } = require('@playwright/test');
const { login } = require('./helpers');

test.describe('Вакансии: создание, поиск, фильтр', () => {

  
    test('Позитив: Создание вакансии с данными', async ({ page }) => {
        await login(page, 'employer');
        await page.goto('https://dev.profteam.su/account/vacancies');
        await page.click('button:has-text("Создать вакансию")');
        await page.waitForSelector('h2:has-text("Создать вакансию")', { timeout: 5000 });

        const uniqueTitle = `Тестовая вакансия ${Date.now()}`;
        
        await page.locator('input[placeholder="Кладовщик"]').first().fill(uniqueTitle);
        await page.locator('text="Очный"').first().click();
        await page.locator('textarea[placeholder="Ваши требования"]').first().fill('Опыт от 1 года');
        await page.locator('textarea[placeholder="Обязанности сотрудника"]').first().fill('Писать тесты');
        
        await expect(page.getByRole('button', { name: 'Обновить вакансию' })).toBeEnabled({ timeout: 5000 });
        await page.click('button:has-text("Обновить вакансию")');
        await page.waitForTimeout(2000);

        await expect(page.getByText(uniqueTitle)).toBeVisible({ timeout: 10000 });
    });

    test('Негатив: Создание с пустым названием', async ({ page }) => {
        await login(page, 'employer');
        await page.goto('https://dev.profteam.su/account/vacancies');
        await page.click('button:has-text("Создать вакансию")');
        await page.waitForSelector('h2:has-text("Создать вакансию")', { timeout: 5000 });

        await page.locator('text="Очный"').first().click();
        await page.locator('textarea[placeholder="Ваши требования"]').first().fill('Требования');
        await page.locator('textarea[placeholder="Обязанности сотрудника"]').first().fill('Обязанности');

        const saveButton = page.getByRole('button', { name: 'Обновить вакансию' });
        await expect(saveButton).toBeDisabled({ timeout: 5000 });
    });


    test('Позитив: Поиск по названию', async ({ page }) => {
        await login(page, 'student');
        await page.goto('https://dev.profteam.su/vacancies');
        await page.waitForLoadState('networkidle');

        const searchInput = page.locator('input[placeholder="Название..."]');
        await searchInput.waitFor({ state: 'visible', timeout: 10000 });
        
        const searchTerm = 'Кладовщик';
        await searchInput.fill(searchTerm);
        
        const searchButton = page.locator('button[ref=e72]');
        if (await searchButton.isVisible()) {
            await searchButton.click();
        } else {
            await searchInput.press('Enter');
        }
        await page.waitForTimeout(2000);

        await expect(page.locator('[class*="vacancy"]').first()).toContainText(searchTerm);
    });

    test('Негатив: Поиск без результатов', async ({ page }) => {
        await login(page, 'student');
        await page.goto('https://dev.profteam.su/vacancies');
        await page.waitForLoadState('networkidle');

        await page.locator('input[placeholder="Название..."]').fill('XyZ_NONEXISTENT_999');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(2000);

        await expect(page.locator('[class*="vacancy"]')).toHaveCount(0);
    });


    test('Позитив: Фильтр "По договорённости"', async ({ page }) => {
        await login(page, 'student');
        await page.goto('https://dev.profteam.su/vacancies');
        await page.waitForLoadState('networkidle');

        const salaryRadio = page.getByRole('radio', { name: 'По договорённости' });
        await salaryRadio.click();
        await page.waitForTimeout(2000);

        await expect(salaryRadio).toBeChecked();
        await expect(page.locator('[class*="vacancy"]').first()).toBeVisible();
    });

});