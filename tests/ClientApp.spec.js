const { test,expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test('Browser Context Playwright test', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle'); //NOT: Bu tum sayfanin yuklenmesi icin kullanilan bir metodtur.
    //NOT2: Eger bu metot ise yaramazsa asagidaki metodu alternatif olarak kullanabilirsin
    //await page.locator("//*[@class = 'card-body']").waitFor();
    const titles = await page.locator("//*[@class = 'card-body']").allTextContents();
    console.log(titles);
});

test.only('E2E test', async ({ page }) => {
    const productName = "ZARA COAT 3";
    const products = page.locator("//*[@class = 'card-body']");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle'); //NOT: Bu tum sayfanin yuklenmesi icin kullanilan bir metodtur.
    const titles = await page.locator("//*[@class = 'card-body']").allTextContents();
    console.log(titles);

    //Zara Coat 3
    const count = await products.count();
    for(let i = 0; i<count; i++)
    {
       if(await products.nth(i).locator("b").textContent() === productName)
       {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
       }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator(`h3:has-text("${productName}")`).isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text= Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionCount = await dropdown.locator("button").count();

    for(let i=0; i<optionCount; ++i)
    {
        const text = await await dropdown.locator("button").nth(i).textContent();
        if(text === "India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
//evet geliyor oldu galiba :))
});



