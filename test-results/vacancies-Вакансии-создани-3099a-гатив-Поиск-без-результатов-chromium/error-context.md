# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vacancies.spec.js >> Вакансии: создание, поиск, фильтр >> ❌ Негатив: Поиск без результатов
- Location: tests\vacancies.spec.js:71:3

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('[class*="vacancy"]')
Expected: 0
Received: 2
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('[class*="vacancy"]')
    14 × locator resolved to 2 elements
       - unexpected value "2"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - link [ref=e5] [cursor=pointer]:
      - /url: /
      - paragraph [ref=e6]:
        - img [ref=e7]
    - navigation [ref=e15]:
      - link "Вакансии" [ref=e16] [cursor=pointer]:
        - /url: /vacancies
        - generic [ref=e17]:
          - img [ref=e19]
          - text: Вакансии
      - link "Потребности" [ref=e21] [cursor=pointer]:
        - /url: /needs
        - generic [ref=e22]:
          - img [ref=e24]
          - text: Потребности
      - link "Стажировки" [ref=e26] [cursor=pointer]:
        - /url: /internships
        - generic [ref=e27]:
          - img [ref=e29]
          - text: Стажировки
      - link "Уведомления" [ref=e31] [cursor=pointer]:
        - /url: /notification
        - generic [ref=e32]:
          - img [ref=e34]
          - text: Уведомления
      - link "Архив" [ref=e36] [cursor=pointer]:
        - /url: /archive/requests
        - generic [ref=e37]:
          - img [ref=e39]
          - text: Архив
  - generic [ref=e43]:
    - generic [ref=e44]:
      - heading "Вакансии" [level=2] [ref=e47]
      - generic [ref=e48]:
        - img [ref=e52]
        - generic [ref=e56]:
          - link "avatar" [ref=e58] [cursor=pointer]:
            - /url: /account/main
            - img "avatar" [ref=e59]
          - button "Выйти" [ref=e60] [cursor=pointer]
    - generic [ref=e61]:
      - generic [ref=e63]:
        - heading "Все вакансии" [level=3] [ref=e64]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - generic [ref=e67]: Поиск
            - generic [ref=e68]:
              - textbox "Название..." [active] [ref=e69]: XyZ_NONEXISTENT_999
              - button [ref=e70] [cursor=pointer]:
                - img [ref=e72]
          - generic [ref=e74]:
            - heading "Заработная плата" [level=2] [ref=e75]
            - generic [ref=e77]:
              - generic [ref=e78] [cursor=pointer]:
                - radio "По диапазону" [ref=e79]
                - generic [ref=e80]: По диапазону
              - generic [ref=e81] [cursor=pointer]:
                - radio "По договорённости" [ref=e82]
                - generic [ref=e83]: По договорённости
              - generic [ref=e84] [cursor=pointer]:
                - radio "Любой" [checked] [ref=e85]
                - generic [ref=e86]: Любой
          - generic [ref=e87] [cursor=pointer]:
            - paragraph [ref=e88]: График работы
            - generic [ref=e90]: Любой
          - generic [ref=e91] [cursor=pointer]:
            - paragraph [ref=e92]: Тип занятости
            - generic [ref=e94]: Любой
          - button "Сбросить фильтр" [ref=e96] [cursor=pointer]
      - heading "Вакансии не найдены" [level=3] [ref=e99]
```

# Test source

```ts
  1  | // tests/02_vacancies.spec.js
  2  | const { test, expect } = require('@playwright/test');
  3  | const { login } = require('./helpers');
  4  | 
  5  | test.describe('Вакансии: создание, поиск, фильтр', () => {
  6  | 
  7  |   // ===== СОЗДАНИЕ ВАКАНСИИ =====
  8  |   
  9  |   test('✅ Позитив: Создание вакансии с данными', async ({ page }) => {
  10 |     await login(page, 'employer');
  11 |     await page.goto('https://dev.profteam.su/account/vacancies');
  12 |     await page.click('button:has-text("Создать вакансию")');
  13 |     await page.waitForSelector('h2:has-text("Создать вакансию")', { timeout: 5000 });
  14 | 
  15 |     const uniqueTitle = `Тестовая вакансия ${Date.now()}`;
  16 |     
  17 |     // ✅ Правильные селекторы из репозитория:
  18 |     await page.locator('input[placeholder="Кладовщик"]').first().fill(uniqueTitle);
  19 |     await page.locator('text="Очный"').first().click();
  20 |     await page.locator('textarea[placeholder="Ваши требования"]').first().fill('Опыт от 1 года');
  21 |     await page.locator('textarea[placeholder="Обязанности сотрудника"]').first().fill('Писать тесты');
  22 |     
  23 |     await expect(page.getByRole('button', { name: 'Обновить вакансию' })).toBeEnabled({ timeout: 5000 });
  24 |     await page.click('button:has-text("Обновить вакансию")');
  25 |     await page.waitForTimeout(2000);
  26 | 
  27 |     await expect(page.getByText(uniqueTitle)).toBeVisible({ timeout: 10000 });
  28 |   });
  29 | 
  30 |   test('❌ Негатив: Создание с пустым названием', async ({ page }) => {
  31 |     await login(page, 'employer');
  32 |     await page.goto('https://dev.profteam.su/account/vacancies');
  33 |     await page.click('button:has-text("Создать вакансию")');
  34 |     await page.waitForSelector('h2:has-text("Создать вакансию")', { timeout: 5000 });
  35 | 
  36 |     // Не заполняем название, только остальные поля
  37 |     await page.locator('text="Очный"').first().click();
  38 |     await page.locator('textarea[placeholder="Ваши требования"]').first().fill('Требования');
  39 |     await page.locator('textarea[placeholder="Обязанности сотрудника"]').first().fill('Обязанности');
  40 | 
  41 |     // Кнопка должна быть disabled
  42 |     const saveButton = page.getByRole('button', { name: 'Обновить вакансию' });
  43 |     await expect(saveButton).toBeDisabled({ timeout: 5000 });
  44 |   });
  45 | 
  46 |   // ===== ПОИСК ВАКАНСИЙ =====
  47 | 
  48 |   test('✅ Позитив: Поиск по названию', async ({ page }) => {
  49 |     await login(page, 'student');
  50 |     await page.goto('https://dev.profteam.su/vacancies');
  51 |     await page.waitForLoadState('networkidle');
  52 | 
  53 |     const searchInput = page.locator('input[placeholder="Название..."]');
  54 |     await searchInput.waitFor({ state: 'visible', timeout: 10000 });
  55 |     
  56 |     const searchTerm = 'Кладовщик';
  57 |     await searchInput.fill(searchTerm);
  58 |     
  59 |     // Пробуем найти кнопку поиска, если нет — жмём Enter
  60 |     const searchButton = page.locator('button[ref=e72]');
  61 |     if (await searchButton.isVisible()) {
  62 |       await searchButton.click();
  63 |     } else {
  64 |       await searchInput.press('Enter');
  65 |     }
  66 |     await page.waitForTimeout(2000);
  67 | 
  68 |     await expect(page.locator('[class*="vacancy"]').first()).toContainText(searchTerm);
  69 |   });
  70 | 
  71 |   test('❌ Негатив: Поиск без результатов', async ({ page }) => {
  72 |     await login(page, 'student');
  73 |     await page.goto('https://dev.profteam.su/vacancies');
  74 |     await page.waitForLoadState('networkidle');
  75 | 
  76 |     await page.locator('input[placeholder="Название..."]').fill('XyZ_NONEXISTENT_999');
  77 |     await page.keyboard.press('Enter');
  78 |     await page.waitForTimeout(2000);
  79 | 
  80 |     // Проверяем, что нет карточек вакансий
> 81 |     await expect(page.locator('[class*="vacancy"]')).toHaveCount(0);
     |                                                      ^ Error: expect(locator).toHaveCount(expected) failed
  82 |   });
  83 | 
  84 |   // ===== ФИЛЬТР ПО ЗАРПЛАТЕ =====
  85 | 
  86 |   test('✅ Позитив: Фильтр "По договорённости"', async ({ page }) => {
  87 |     await login(page, 'student');
  88 |     await page.goto('https://dev.profteam.su/vacancies');
  89 |     await page.waitForLoadState('networkidle');
  90 | 
  91 |     const salaryRadio = page.getByRole('radio', { name: 'По договорённости' });
  92 |     await salaryRadio.click();
  93 |     await page.waitForTimeout(2000);
  94 | 
  95 |     await expect(salaryRadio).toBeChecked();
  96 |     await expect(page.locator('[class*="vacancy"]').first()).toBeVisible();
  97 |   });
  98 | 
  99 | });
```