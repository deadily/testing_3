# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: workspace.spec.js >> Рабочее пространство >> ❌ Негатив: Отправка пустого сообщения
- Location: tests\workspace.spec.js:64:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.send-message-icon, button:has-text("Отправить")').first()
    - locator resolved to <svg fill="none" data-v-7f5aea66="" data-v-7e7793c2="" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="send-message-icon" xmlns="http://www.w3.org/2000/svg">…</svg>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    39 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
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
        - generic [ref=e54]:
          - link "avatar" [ref=e56] [cursor=pointer]:
            - /url: /account/main
            - img "avatar" [ref=e57]
          - button "Выйти" [ref=e58] [cursor=pointer]
    - generic [ref=e59]:
      - generic [ref=e60] [cursor=pointer]:
        - button [ref=e61]:
          - img [ref=e62]
        - generic [ref=e64]:
          - img "avatar" [ref=e65]
          - generic [ref=e66]:
            - paragraph [ref=e67]: Алёна Петрова
            - list [ref=e68]:
              - listitem [ref=e69]: Создатель
      - article [ref=e72]:
        - generic [ref=e73]:
          - paragraph [ref=e74]: Стажировка пройдена
          - img [ref=e76]
    - article [ref=e78]:
      - generic [ref=e79]:
        - generic [ref=e80]:
          - heading "Тестовая стажировка" [level=3] [ref=e81]
          - link "подробнее" [ref=e82] [cursor=pointer]:
            - /url: /internships/361
        - paragraph
    - generic [ref=e83]:
      - heading "Активность пространства" [level=3] [ref=e84]
      - generic [ref=e87]:
        - generic [ref=e91]:
          - generic [ref=e92]:
            - paragraph [ref=e93]: Алёна Петрова Игоревна
            - paragraph [ref=e94]: оставлен комментарий
            - paragraph
            - time [ref=e95]: • 23:08
          - generic [ref=e96]:
            - paragraph [ref=e99]: Тестовый текст
            - generic [ref=e100]:
              - button "Ответить" [ref=e102] [cursor=pointer]:
                - img [ref=e104]
                - generic [ref=e106]: Ответить
              - button "Копировать" [ref=e108] [cursor=pointer]:
                - img [ref=e110]
                - generic [ref=e112]: Копировать
        - generic [ref=e113]:
          - paragraph [ref=e114]: Рабочее пространство заморожено.
          - article [ref=e115]:
            - generic [ref=e118]:
              - textbox "Напишите комментарий..." [disabled] [ref=e120]
              - generic [ref=e121]:
                - button [ref=e122] [cursor=pointer]:
                  - img [ref=e125]
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
  36  |         await messageInput.fill(msg);
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
> 84  |         await sendButton.click();
      |                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  137 | 
  138 | });
```