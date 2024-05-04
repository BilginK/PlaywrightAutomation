const {test,expect} = require('@playwright/test');

test('Browser Context- Validating Error Login', async ({browser}) =>
{
    //chrome- plugins/cookies
    const context = await browser.newContext();  
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const password = page.locator("[type='password']");
    const cardTitels = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const title = await page.title();
    console.log('Page title', title);

   
    //css
    await userName.fill("rahulshetty");
    await password.fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(await page.locator("[style*='block']")).toContainText('Incorrect');

    //type-fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();

    console.log(await cardTitels.first().textContent());
    console.log(await cardTitels.nth(1).textContent());
    console.log(await cardTitels.last().textContent());
    const allTitles = await cardTitels.allTextContents();
    console.log(allTitles)
});

test('Page Playwright test', async ({page}) =>
{
    await page.goto("https://google.com");
    //get title -assertion
    const title = await page.title();
    console.log('Page title', title);
    
    await expect(page).toHaveTitle("Google");

});

test('UI Controls', async ({page}) =>
{    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult"); 
   // await page.pause(); NOT: Test devam ederken durmak istedigin bir yerde durdurabiliyorsun bu metotla.
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");

});

test('@Child window handeling', async ({browser}) =>
{
    const context = await browser.newContext();  
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    
   const [newPage] = await Promise.all(
    [
        context.waitForEvent('page'),//listen for any new page pending, rejected, fulfilled
        documentLink.click(),

    ])//new page is opened

    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    await userName.fill(domain);
    await page.pause();
    
});