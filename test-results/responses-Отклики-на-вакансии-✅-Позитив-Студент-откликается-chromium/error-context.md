# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responses.spec.js >> Отклики на вакансии >> ✅ Позитив: Студент откликается
- Location: tests\responses.spec.js:7:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Откликнуться"), .btn-apply, button[class*="apply"], .vacancy-card button').first()

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
              - textbox "Название..." [ref=e69]
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
      - generic [ref=e97]:
        - generic [ref=e98]:
          - generic [ref=e99]:
            - generic [ref=e100]:
              - list [ref=e103]:
                - listitem [ref=e104]: КПСС
                - listitem [ref=e105]: • 14 мая 2026 г., 23:06
              - heading "ДЛЯ ТЕСТА" [level=2] [ref=e106]
              - paragraph [ref=e107]: Не указано
            - generic [ref=e109]:
              - generic [ref=e110]:
                - generic [ref=e111]: Полная занятость
                - generic [ref=e112]: Очный
              - button "Подробнее" [ref=e114] [cursor=pointer]
          - img "company-logo" [ref=e116]
        - generic [ref=e117]:
          - generic [ref=e118]:
            - generic [ref=e119]:
              - list [ref=e122]:
                - listitem [ref=e123]: КПСС
                - listitem [ref=e124]: • 14 мая 2026 г., 22:56
              - heading "Тестовая вакансия 1778774206269" [level=2] [ref=e125]
              - paragraph [ref=e126]: Не указано
            - generic [ref=e128]:
              - generic [ref=e129]:
                - generic [ref=e130]: Полная занятость
                - generic [ref=e131]: Очный
              - button "Подробнее" [ref=e133] [cursor=pointer]
          - img "company-logo" [ref=e135]
        - generic [ref=e136]:
          - generic [ref=e137]:
            - generic [ref=e138]:
              - list [ref=e141]:
                - listitem [ref=e142]: КПСС
                - listitem [ref=e143]: • 14 мая 2026 г., 22:43
              - heading "Тестовая вакансия 1778773392777" [level=2] [ref=e144]
              - paragraph [ref=e145]: Не указано
            - generic [ref=e147]:
              - generic [ref=e148]:
                - generic [ref=e149]: Полная занятость
                - generic [ref=e150]: Очный
              - button "Подробнее" [ref=e152] [cursor=pointer]
          - img "company-logo" [ref=e154]
        - generic [ref=e155]:
          - generic [ref=e156]:
            - generic [ref=e157]:
              - list [ref=e160]:
                - listitem [ref=e161]: КПСС
                - listitem [ref=e162]: • 14 мая 2026 г., 22:42
              - heading "Тестовая вакансия 1778773336740" [level=2] [ref=e163]
              - paragraph [ref=e164]: Не указано
            - generic [ref=e166]:
              - generic [ref=e167]:
                - generic [ref=e168]: Полная занятость
                - generic [ref=e169]: Очный
              - button "Подробнее" [ref=e171] [cursor=pointer]
          - img "company-logo" [ref=e173]
        - generic [ref=e174]:
          - generic [ref=e175]:
            - generic [ref=e176]:
              - list [ref=e179]:
                - listitem [ref=e180]: КПСС
                - listitem [ref=e181]: • 14 мая 2026 г., 20:06
              - heading "Тестовая вакансия 1778763971518" [level=2] [ref=e182]
              - paragraph [ref=e183]: Не указано
            - generic [ref=e185]:
              - generic [ref=e186]:
                - generic [ref=e187]: Полная занятость
                - generic [ref=e188]: Очный
              - button "Подробнее" [ref=e190] [cursor=pointer]
          - img "company-logo" [ref=e192]
        - generic [ref=e193]:
          - generic [ref=e194]:
            - generic [ref=e195]:
              - list [ref=e198]:
                - listitem [ref=e199]: КПСС
                - listitem [ref=e200]: • 14 мая 2026 г., 19:59
              - heading "Тестовая вакансия 1778763549055" [level=2] [ref=e201]
              - paragraph [ref=e202]: Не указано
            - generic [ref=e204]:
              - generic [ref=e205]:
                - generic [ref=e206]: Полная занятость
                - generic [ref=e207]: Очный
              - button "Подробнее" [ref=e209] [cursor=pointer]
          - img "company-logo" [ref=e211]
        - generic [ref=e212]:
          - generic [ref=e213]:
            - generic [ref=e214]:
              - list [ref=e217]:
                - listitem [ref=e218]: КПСС
                - listitem [ref=e219]: • 14 мая 2026 г., 19:50
              - heading "Для вакансий" [level=2] [ref=e220]
              - paragraph [ref=e221]: Не указано
            - generic [ref=e223]:
              - generic [ref=e224]:
                - generic [ref=e225]: Полная занятость
                - generic [ref=e226]: Очный
              - button "Подробнее" [ref=e228] [cursor=pointer]
          - img "company-logo" [ref=e230]
        - generic [ref=e231]:
          - generic [ref=e232]:
            - generic [ref=e233]:
              - list [ref=e236]:
                - listitem [ref=e237]: КПСС
                - listitem [ref=e238]: • 14 мая 2026 г., 19:40
              - heading "Тестовая вакансия 1778762429492" [level=2] [ref=e239]
              - paragraph [ref=e240]: Не указано
            - generic [ref=e242]:
              - generic [ref=e243]:
                - generic [ref=e244]: Полная занятость
                - generic [ref=e245]: Очный
              - button "Подробнее" [ref=e247] [cursor=pointer]
          - img "company-logo" [ref=e249]
        - generic [ref=e250]:
          - generic [ref=e251]:
            - generic [ref=e252]:
              - list [ref=e255]:
                - listitem [ref=e256]: КПСС
                - listitem [ref=e257]: • 14 мая 2026 г., 19:30
              - heading "ТЕстинг" [level=2] [ref=e258]
              - paragraph [ref=e259]: Не указано
            - generic [ref=e261]:
              - generic [ref=e262]:
                - generic [ref=e263]: Полная занятость
                - generic [ref=e264]: Очный
              - button "Подробнее" [ref=e266] [cursor=pointer]
          - img "company-logo" [ref=e268]
        - generic [ref=e269]:
          - generic [ref=e270]:
            - generic [ref=e271]:
              - list [ref=e274]:
                - listitem [ref=e275]: КПСС
                - listitem [ref=e276]: • 14 мая 2026 г., 19:30
              - heading "99999" [level=2] [ref=e277]
              - paragraph [ref=e278]: Не указано
            - generic [ref=e280]:
              - generic [ref=e281]:
                - generic [ref=e282]: Полная занятость
                - generic [ref=e283]: Очный
              - button "Подробнее" [ref=e285] [cursor=pointer]
          - img "company-logo" [ref=e287]
```

# Test source

```ts
  1   | // tests/03_responses.spec.js
  2   | const { test, expect } = require('@playwright/test');
  3   | const { login } = require('./helpers');
  4   | 
  5   | test.describe('Отклики на вакансии', () => {
  6   | 
  7   |   test('✅ Позитив: Студент откликается', async ({ page }) => {
  8   |     await login(page, 'student');
  9   |     await page.goto('https://dev.profteam.su/vacancies');
  10  |     await page.waitForTimeout(3000);
  11  |     
  12  |     // Ищем кнопку отклика разными способами
  13  |     const applyButton = page.locator(
  14  |       'button:has-text("Откликнуться"), ' +
  15  |       '.btn-apply, ' +
  16  |       'button[class*="apply"], ' +
  17  |       '.vacancy-card button'
  18  |     ).first();
  19  |     
> 20  |     await applyButton.click();
      |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21  |     await page.waitForTimeout(1000);
  22  |     
  23  |     // Пробуем подтвердить (если есть модальное окно)
  24  |     const confirmButton = page.locator(
  25  |       'button:has-text("Подтвердить"), ' +
  26  |       'button:has-text("OK"), ' +
  27  |       '.btn-confirm, ' +
  28  |       '.modal button[type="button"]'
  29  |     ).first();
  30  |     
  31  |     if (await confirmButton.isVisible().catch(() => false)) {
  32  |       await confirmButton.click();
  33  |       await page.waitForTimeout(2000);
  34  |     }
  35  |     
  36  |     // Проверяем успех
  37  |     const successVisible = await page.locator(
  38  |       '.success, .toast-success, [class*="success"], ' +
  39  |       'text="Отклик отправлен", text="Успешно"'
  40  |     ).isVisible().catch(() => false);
  41  |     
  42  |     expect(successVisible).toBeTruthy();
  43  |   });
  44  | 
  45  |   test('❌ Негатив: Отклик без авторизации', async ({ page }) => {
  46  |     await page.goto('https://dev.profteam.su/vacancies');
  47  |     await page.waitForTimeout(2000);
  48  |     
  49  |     const applyButton = page.locator('button:has-text("Откликнуться"), .btn-apply').first();
  50  |     await applyButton.click();
  51  |     await page.waitForTimeout(2000);
  52  |     
  53  |     if (page.url().includes('login')) {
  54  |       expect(page.url()).toContain('login');
  55  |     } else {
  56  |       const errorVisible = await page.locator('.error, .auth-required, .login-required').isVisible().catch(() => false);
  57  |       expect(errorVisible).toBeTruthy();
  58  |     }
  59  |   });
  60  | 
  61  |   test('✅ Позитив: Работодатель подтверждает отклик', async ({ page }) => {
  62  |     await login(page, 'employer');
  63  |     await page.goto('https://dev.profteam.su/account/responses');
  64  |     await page.waitForTimeout(3000);
  65  | 
  66  |     // Кликаем на вкладку "Одобрены"
  67  |     const approvedTab = page.locator('text=Одобрены, .tab:has-text("Одобрены"), [role="tab"]:has-text("Одобрены")').first();
  68  |     if (await approvedTab.isVisible().catch(() => false)) {
  69  |       await approvedTab.click();
  70  |       await page.waitForTimeout(2000);
  71  |     }
  72  | 
  73  |     // Ищем первый отклик
  74  |     const firstResponse = page.locator('.responses-list-item, .response-item, [class*="response"]').first();
  75  |     if (await firstResponse.count() === 0) {
  76  |       console.log('Нет откликов для подтверждения');
  77  |       test.skip();
  78  |       return;
  79  |     }
  80  | 
  81  |     // Кликаем на рабочее пространство
  82  |     const workspaceButton = firstResponse.locator(
  83  |       'button:has-text("Рабочее пространство"), ' +
  84  |       '.btn-workspace, ' +
  85  |       'button[class*="workspace"]'
  86  |     ).first();
  87  |     
  88  |     if (await workspaceButton.isVisible().catch(() => false)) {
  89  |       await workspaceButton.click();
  90  |       await page.waitForTimeout(2000);
  91  | 
  92  |       // Принимаем на вакансию
  93  |       const acceptButton = page.locator(
  94  |         'button:has-text("Принят на вакансию"), ' +
  95  |         'button:has-text("Принять"), ' +
  96  |         '.btn-accept'
  97  |       ).first();
  98  |       
  99  |       if (await acceptButton.isVisible().catch(() => false)) {
  100 |         await acceptButton.click();
  101 |         await page.waitForTimeout(2000);
  102 |       }
  103 |     }
  104 |     
  105 |     expect(true).toBeTruthy(); // Если дошли сюда — тест прошёл
  106 |   });
  107 | 
  108 | });
```