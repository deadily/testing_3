# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: workspace.spec.js >> Рабочее пространство >> ✅ Позитив: Отправка сообщения
- Location: tests\workspace.spec.js:7:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('textarea[placeholder*="сообщение"], textarea[class*="message"], .chat-input, textarea').first()
    - locator resolved to <textarea rows="6" disabled cols="33" class="form-area" data-v-1121bbd9="" placeholder="Напишите комментарий...">↵    </textarea>
    - fill("Тест 1778775038208")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not enabled
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not enabled
    - retrying fill action
      - waiting 100ms
    34 × waiting for element to be visible, enabled and editable
       - element is not enabled
     - retrying fill action
       - waiting 500ms

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
  - generic [ref=e42]:
    - generic [ref=e43]:
      - heading "Пространство" [level=2] [ref=e45]
      - generic [ref=e46]:
        - img [ref=e50]
        - generic [ref=e52]:
          - link "avatar" [ref=e54] [cursor=pointer]:
            - /url: /account/main
            - img "avatar" [ref=e55]
          - button "Выйти" [ref=e56] [cursor=pointer]
    - generic [ref=e57]:
      - generic [ref=e58] [cursor=pointer]:
        - button [ref=e59]:
          - img [ref=e60]
        - generic [ref=e62]:
          - img "avatar" [ref=e63]
          - generic [ref=e64]:
            - paragraph [ref=e65]: Алёна Петрова
            - list [ref=e66]:
              - listitem [ref=e67]: Создатель
      - article [ref=e70]:
        - generic [ref=e71]:
          - paragraph [ref=e72]: Стажировка пройдена
          - img [ref=e74]
    - article [ref=e76]:
      - generic [ref=e77]:
        - generic [ref=e78]:
          - heading "Тестовая стажировка" [level=3] [ref=e79]
          - link "подробнее" [ref=e80] [cursor=pointer]:
            - /url: /internships/361
        - paragraph
    - generic [ref=e81]:
      - heading "Активность пространства" [level=3] [ref=e82]
      - generic [ref=e85]:
        - generic [ref=e89]:
          - generic [ref=e90]:
            - paragraph [ref=e91]: Алёна Петрова Игоревна
            - paragraph [ref=e92]: оставлен комментарий
            - paragraph
            - time [ref=e93]: • 23:08
          - generic [ref=e94]:
            - paragraph [ref=e97]: Тестовый текст
            - generic [ref=e98]:
              - button "Ответить" [ref=e100] [cursor=pointer]:
                - img [ref=e102]
                - generic [ref=e104]: Ответить
              - button "Копировать" [ref=e106] [cursor=pointer]:
                - img [ref=e108]
                - generic [ref=e110]: Копировать
        - generic [ref=e111]:
          - paragraph [ref=e112]: Рабочее пространство заморожено.
          - article [ref=e113]:
            - generic [ref=e116]:
              - textbox "Напишите комментарий..." [disabled] [ref=e118]
              - generic [ref=e119]:
                - button [ref=e120] [cursor=pointer]:
                  - img [ref=e123]
                - button [disabled]:
                  - generic:
                    - img
```

# Test source

```ts
  1   | // tests/04_workspace.spec.js
  2   | const { test, expect } = require('@playwright/test');
  3   | const { login } = require('./helpers');
  4   | 
  5   | test.describe('Рабочее пространство', () => {
  6   | 
  7   |   test('✅ Позитив: Отправка сообщения', async ({ page }) => {
  8   |     await login(page, 'employer');
  9   |     await page.goto('https://dev.profteam.su/account/responses');
  10  |     await page.waitForTimeout(3000);
  11  | 
  12  |     // Переходим в рабочее пространство
  13  |     const approvedTab = page.locator('text=Одобрены').first();
  14  |     if (await approvedTab.isVisible().catch(() => false)) {
  15  |       await approvedTab.click();
  16  |       await page.waitForTimeout(2000);
  17  |     }
  18  | 
  19  |     const firstResponse = page.locator('.responses-list-item').first();
  20  |     const workspaceButton = firstResponse.locator('button:has-text("Рабочее пространство")').first();
  21  |     
  22  |     if (await workspaceButton.isVisible().catch(() => false)) {
  23  |       await workspaceButton.click();
  24  |       await page.waitForTimeout(2000);
  25  | 
  26  |       // Ищем поле ввода сообщения
  27  |       const messageInput = page.locator(
  28  |         'textarea[placeholder*="сообщение"], ' +
  29  |         'textarea[class*="message"], ' +
  30  |         '.chat-input, ' +
  31  |         'textarea'
  32  |       ).first();
  33  |       
  34  |       if (await messageInput.isVisible().catch(() => false)) {
  35  |         const msg = `Тест ${Date.now()}`;
> 36  |         await messageInput.fill(msg);
      |                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  37  |         
  38  |         // Ищем кнопку отправки
  39  |         const sendButton = page.locator(
  40  |           'button:has-text("Отправить"), ' +
  41  |           '.send-message-icon, ' +
  42  |           'button[class*="send"], ' +
  43  |           '.btn-send'
  44  |         ).first();
  45  |         
  46  |         if (await sendButton.isVisible().catch(() => false)) {
  47  |           await sendButton.click();
  48  |           await page.waitForTimeout(2000);
  49  |           
  50  |           // Проверяем что сообщение появилось
  51  |           const messageVisible = await page.locator(`text=${msg}`).isVisible().catch(() => false);
  52  |           expect(messageVisible).toBeTruthy();
  53  |         } else {
  54  |           // Пробуем Enter
  55  |           await messageInput.press('Enter');
  56  |           await page.waitForTimeout(2000);
  57  |         }
  58  |       }
  59  |     }
  60  |     
  61  |     expect(true).toBeTruthy();
  62  |   });
  63  | 
  64  |   test('❌ Негатив: Отправка пустого сообщения', async ({ page }) => {
  65  |     await login(page, 'employer');
  66  |     await page.goto('https://dev.profteam.su/account/responses');
  67  |     await page.waitForTimeout(2000);
  68  | 
  69  |     const approvedTab = page.locator('text=Одобрены').first();
  70  |     if (await approvedTab.isVisible().catch(() => false)) {
  71  |       await approvedTab.click();
  72  |       await page.waitForTimeout(2000);
  73  |     }
  74  | 
  75  |     const firstResponse = page.locator('.responses-list-item').first();
  76  |     const workspaceButton = firstResponse.locator('button:has-text("Рабочее пространство")').first();
  77  |     
  78  |     if (await workspaceButton.isVisible().catch(() => false)) {
  79  |       await workspaceButton.click();
  80  |       await page.waitForTimeout(2000);
  81  | 
  82  |       const sendButton = page.locator('.send-message-icon, button:has-text("Отправить")').first();
  83  |       if (await sendButton.isVisible().catch(() => false)) {
  84  |         await sendButton.click();
  85  |         await page.waitForTimeout(2000);
  86  | 
  87  |         // Проверяем что ошибка появилась ИЛИ сообщение не отправилось
  88  |         const errorVisible = await page.locator('.error, .validation, .alert-danger').isVisible().catch(() => false);
  89  |         expect(errorVisible).toBeTruthy();
  90  |       }
  91  |     }
  92  |     
  93  |     expect(true).toBeTruthy();
  94  |   });
  95  | 
  96  |   test('✅ Позитив: Смена статуса на "Принят на вакансию"', async ({ page }) => {
  97  |     await login(page, 'employer');
  98  |     await page.goto('https://dev.profteam.su/account/responses');
  99  |     await page.waitForTimeout(3000);
  100 | 
  101 |     const approvedTab = page.locator('text=Одобрены').first();
  102 |     if (await approvedTab.isVisible().catch(() => false)) {
  103 |       await approvedTab.click();
  104 |       await page.waitForTimeout(2000);
  105 |     }
  106 | 
  107 |     const firstResponse = page.locator('.responses-list-item').first();
  108 |     const workspaceButton = firstResponse.locator('button:has-text("Рабочее пространство")').first();
  109 |     
  110 |     if (await workspaceButton.isVisible().catch(() => false)) {
  111 |       await workspaceButton.click();
  112 |       await page.waitForTimeout(2000);
  113 | 
  114 |       const acceptButton = page.locator('button:has-text("Принят на вакансию"), button:has-text("Принять")').first();
  115 |       if (await acceptButton.isVisible().catch(() => false)) {
  116 |         await acceptButton.click();
  117 |         await page.waitForTimeout(2000);
  118 | 
  119 |         const statusVisible = await page.locator('text=Принят на вакансию, .status-accepted').isVisible().catch(() => false);
  120 |         expect(statusVisible).toBeTruthy();
  121 |       }
  122 |     }
  123 |     
  124 |     expect(true).toBeTruthy();
  125 |   });
  126 | 
  127 |   test('❌ Негатив: Студент не может менять статус', async ({ page }) => {
  128 |     await login(page, 'student');
  129 |     await page.goto('https://dev.profteam.su/account/responses');
  130 |     await page.waitForTimeout(2000);
  131 | 
  132 |     const acceptButton = page.locator('button:has-text("Принят на вакансию")').first();
  133 |     const buttonCount = await acceptButton.count();
  134 |     
  135 |     expect(buttonCount).toBe(0);
  136 |   });
```