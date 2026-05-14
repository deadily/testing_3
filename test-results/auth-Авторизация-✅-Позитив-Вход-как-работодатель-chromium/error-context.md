# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.js >> Авторизация >> ✅ Позитив: Вход как работодатель
- Location: tests\auth.spec.js:7:3

# Error details

```
Error: expect(received).not.toContain(expected) // indexOf

Expected substring: not "login"
Received string:        "https://dev.profteam.su/login"
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
  - generic [ref=e32]:
    - generic [ref=e33]:
      - heading "Авторизация" [level=2] [ref=e35]
      - generic [ref=e36]:
        - link "Авторизация" [ref=e37] [cursor=pointer]:
          - /url: /login
          - button "Авторизация" [active] [ref=e38]
        - link "Регистрация" [ref=e39] [cursor=pointer]:
          - /url: /registration
          - button "Регистрация" [ref=e40]
    - generic [ref=e41]:
      - generic [ref=e42]:
        - generic [ref=e44]:
          - img [ref=e45]
          - generic [ref=e53]:
            - paragraph [ref=e54]: Впервые на платформе?
            - link "Создать аккаунт" [ref=e56] [cursor=pointer]:
              - /url: /registration
        - generic [ref=e57]:
          - generic [ref=e59]:
            - generic [ref=e60]: Логин
            - textbox "Латинские символы" [ref=e61]: testerEmployer
          - generic [ref=e62]:
            - generic [ref=e63]:
              - generic [ref=e64]: Пароль
              - textbox "*******" [ref=e65]: Password1
              - img [ref=e68]
            - generic [ref=e71]:
              - paragraph [ref=e72]: Забыли пароль?
              - link "Восстановить" [ref=e74] [cursor=pointer]:
                - /url: /recover-password
      - generic [ref=e75]:
        - button "Вход через «Сетевой Город»" [ref=e77] [cursor=pointer]
        - button "Войти" [ref=e79] [cursor=pointer]
```

# Test source

```ts
  1  | // tests/01_auth.spec.js
  2  | const { test, expect } = require('@playwright/test');
  3  | const { login } = require('./helpers');
  4  | 
  5  | test.describe('Авторизация', () => {
  6  |   
  7  |   test('✅ Позитив: Вход как работодатель', async ({ page }) => {
  8  |     await page.goto('https://dev.profteam.su/login');
  9  |     await page.waitForTimeout(2000);
  10 |     
  11 |     // Пробуем разные селекторы для поля логина
  12 |     const loginField = page.locator('input[autocomplete="username"], input[name="login"], input[type="text"]').first();
  13 |     await loginField.fill('testerEmployer');
  14 |     
  15 |     const passwordField = page.locator('input[autocomplete="current-password"], input[name="password"], input[type="password"]').first();
  16 |     await passwordField.fill('Password1');
  17 |     
  18 |     const submitButton = page.locator('button:has-text("Войти"), button[type="submit"]').first();
  19 |     await submitButton.click();
  20 |     
  21 |     // Ждём редирект
  22 |     await page.waitForTimeout(3000);
> 23 |     expect(page.url()).not.toContain('login');
     |                            ^ Error: expect(received).not.toContain(expected) // indexOf
  24 |   });
  25 | 
  26 |   test('❌ Негатив: Неверный пароль', async ({ page }) => {
  27 |     await page.goto('https://dev.profteam.su/login');
  28 |     await page.waitForTimeout(1000);
  29 |     
  30 |     await page.locator('input[autocomplete="username"], input[name="login"]').first().fill('testerEmployer');
  31 |     await page.locator('input[autocomplete="current-password"], input[name="password"]').first().fill('WrongPass123');
  32 |     await page.locator('button:has-text("Войти"), button[type="submit"]').first().click();
  33 |     await page.waitForTimeout(2000);
  34 |     
  35 |     expect(page.url()).toContain('login');
  36 |   });
  37 | 
  38 | });
```