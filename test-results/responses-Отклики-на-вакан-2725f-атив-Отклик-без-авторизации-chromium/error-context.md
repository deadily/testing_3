# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responses.spec.js >> Отклики на вакансии >> ❌ Негатив: Отклик без авторизации
- Location: tests\responses.spec.js:45:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Откликнуться"), .btn-apply').first()

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
  - generic [ref=e33]:
    - generic [ref=e34]:
      - heading "Вакансии" [level=2] [ref=e37]
      - generic [ref=e38]:
        - link "Авторизация" [ref=e39] [cursor=pointer]:
          - /url: /login
          - button "Авторизация" [ref=e40]
        - link "Регистрация" [ref=e41] [cursor=pointer]:
          - /url: /registration
          - button "Регистрация" [ref=e42]
    - generic [ref=e43]:
      - generic [ref=e45]:
        - heading "Все вакансии" [level=3] [ref=e46]
        - generic [ref=e47]:
          - generic [ref=e48]:
            - generic [ref=e49]: Поиск
            - generic [ref=e50]:
              - textbox "Название..." [ref=e51]
              - button [ref=e52] [cursor=pointer]:
                - img [ref=e54]
          - generic [ref=e56]:
            - heading "Заработная плата" [level=2] [ref=e57]
            - generic [ref=e59]:
              - generic [ref=e60] [cursor=pointer]:
                - radio "По диапазону" [ref=e61]
                - generic [ref=e62]: По диапазону
              - generic [ref=e63] [cursor=pointer]:
                - radio "По договорённости" [ref=e64]
                - generic [ref=e65]: По договорённости
              - generic [ref=e66] [cursor=pointer]:
                - radio "Любой" [checked] [ref=e67]
                - generic [ref=e68]: Любой
          - generic [ref=e69] [cursor=pointer]:
            - paragraph [ref=e70]: График работы
            - generic [ref=e72]: Любой
          - generic [ref=e73] [cursor=pointer]:
            - paragraph [ref=e74]: Тип занятости
            - generic [ref=e76]: Любой
          - button "Сбросить фильтр" [ref=e78] [cursor=pointer]
      - generic [ref=e79]:
        - generic [ref=e80]:
          - generic [ref=e81]:
            - generic [ref=e82]:
              - list [ref=e85]:
                - listitem [ref=e86]: КПСС
                - listitem [ref=e87]: • 14 мая 2026 г., 23:06
              - heading "ДЛЯ ТЕСТА" [level=2] [ref=e88]
              - paragraph [ref=e89]: Не указано
            - generic [ref=e91]:
              - generic [ref=e92]:
                - generic [ref=e93]: Полная занятость
                - generic [ref=e94]: Очный
              - button "Подробнее" [ref=e96] [cursor=pointer]
          - img "company-logo" [ref=e98]
        - generic [ref=e99]:
          - generic [ref=e100]:
            - generic [ref=e101]:
              - list [ref=e104]:
                - listitem [ref=e105]: КПСС
                - listitem [ref=e106]: • 14 мая 2026 г., 22:56
              - heading "Тестовая вакансия 1778774206269" [level=2] [ref=e107]
              - paragraph [ref=e108]: Не указано
            - generic [ref=e110]:
              - generic [ref=e111]:
                - generic [ref=e112]: Полная занятость
                - generic [ref=e113]: Очный
              - button "Подробнее" [ref=e115] [cursor=pointer]
          - img "company-logo" [ref=e117]
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - list [ref=e123]:
                - listitem [ref=e124]: КПСС
                - listitem [ref=e125]: • 14 мая 2026 г., 22:43
              - heading "Тестовая вакансия 1778773392777" [level=2] [ref=e126]
              - paragraph [ref=e127]: Не указано
            - generic [ref=e129]:
              - generic [ref=e130]:
                - generic [ref=e131]: Полная занятость
                - generic [ref=e132]: Очный
              - button "Подробнее" [ref=e134] [cursor=pointer]
          - img "company-logo" [ref=e136]
        - generic [ref=e137]:
          - generic [ref=e138]:
            - generic [ref=e139]:
              - list [ref=e142]:
                - listitem [ref=e143]: КПСС
                - listitem [ref=e144]: • 14 мая 2026 г., 22:42
              - heading "Тестовая вакансия 1778773336740" [level=2] [ref=e145]
              - paragraph [ref=e146]: Не указано
            - generic [ref=e148]:
              - generic [ref=e149]:
                - generic [ref=e150]: Полная занятость
                - generic [ref=e151]: Очный
              - button "Подробнее" [ref=e153] [cursor=pointer]
          - img "company-logo" [ref=e155]
        - generic [ref=e156]:
          - generic [ref=e157]:
            - generic [ref=e158]:
              - list [ref=e161]:
                - listitem [ref=e162]: КПСС
                - listitem [ref=e163]: • 14 мая 2026 г., 20:06
              - heading "Тестовая вакансия 1778763971518" [level=2] [ref=e164]
              - paragraph [ref=e165]: Не указано
            - generic [ref=e167]:
              - generic [ref=e168]:
                - generic [ref=e169]: Полная занятость
                - generic [ref=e170]: Очный
              - button "Подробнее" [ref=e172] [cursor=pointer]
          - img "company-logo" [ref=e174]
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - list [ref=e180]:
                - listitem [ref=e181]: КПСС
                - listitem [ref=e182]: • 14 мая 2026 г., 19:59
              - heading "Тестовая вакансия 1778763549055" [level=2] [ref=e183]
              - paragraph [ref=e184]: Не указано
            - generic [ref=e186]:
              - generic [ref=e187]:
                - generic [ref=e188]: Полная занятость
                - generic [ref=e189]: Очный
              - button "Подробнее" [ref=e191] [cursor=pointer]
          - img "company-logo" [ref=e193]
        - generic [ref=e194]:
          - generic [ref=e195]:
            - generic [ref=e196]:
              - list [ref=e199]:
                - listitem [ref=e200]: КПСС
                - listitem [ref=e201]: • 14 мая 2026 г., 19:50
              - heading "Для вакансий" [level=2] [ref=e202]
              - paragraph [ref=e203]: Не указано
            - generic [ref=e205]:
              - generic [ref=e206]:
                - generic [ref=e207]: Полная занятость
                - generic [ref=e208]: Очный
              - button "Подробнее" [ref=e210] [cursor=pointer]
          - img "company-logo" [ref=e212]
        - generic [ref=e213]:
          - generic [ref=e214]:
            - generic [ref=e215]:
              - list [ref=e218]:
                - listitem [ref=e219]: КПСС
                - listitem [ref=e220]: • 14 мая 2026 г., 19:40
              - heading "Тестовая вакансия 1778762429492" [level=2] [ref=e221]
              - paragraph [ref=e222]: Не указано
            - generic [ref=e224]:
              - generic [ref=e225]:
                - generic [ref=e226]: Полная занятость
                - generic [ref=e227]: Очный
              - button "Подробнее" [ref=e229] [cursor=pointer]
          - img "company-logo" [ref=e231]
        - generic [ref=e232]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - list [ref=e237]:
                - listitem [ref=e238]: КПСС
                - listitem [ref=e239]: • 14 мая 2026 г., 19:30
              - heading "ТЕстинг" [level=2] [ref=e240]
              - paragraph [ref=e241]: Не указано
            - generic [ref=e243]:
              - generic [ref=e244]:
                - generic [ref=e245]: Полная занятость
                - generic [ref=e246]: Очный
              - button "Подробнее" [ref=e248] [cursor=pointer]
          - img "company-logo" [ref=e250]
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]:
              - list [ref=e256]:
                - listitem [ref=e257]: КПСС
                - listitem [ref=e258]: • 14 мая 2026 г., 19:30
              - heading "99999" [level=2] [ref=e259]
              - paragraph [ref=e260]: Не указано
            - generic [ref=e262]:
              - generic [ref=e263]:
                - generic [ref=e264]: Полная занятость
                - generic [ref=e265]: Очный
              - button "Подробнее" [ref=e267] [cursor=pointer]
          - img "company-logo" [ref=e269]
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
  20  |     await applyButton.click();
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
> 50  |     await applyButton.click();
      |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
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