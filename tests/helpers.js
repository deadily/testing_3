const users = {
    student:    { username: 'Sozpawka', password: 'Password1' },
    employer:   { username: 'testerEmployer', password: 'Password1' },
    admin:      { username: 'testerAdmin', password: 'Password1' },
    institution:{ username: 'testerInstitution', password: 'Password1' }
};

async function login(page, role) {
    const user = users[role];
    if (!user) throw new Error(`Неизвестная роль: ${role}`);
    
    await page.goto('https://dev.profteam.su/login');
    await page.fill('input[autocomplete="username"]', user.username);
    await page.fill('input[autocomplete="current-password"]', user.password);
    await page.click('button:has-text("Войти")');
    
    await page.waitForFunction(
        () => !window.location.href.includes('/login'),
        { timeout: 10000 }
    );
}

module.exports = { users, login };