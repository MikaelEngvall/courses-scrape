const fs = require('fs');
const puppeteer = require('puppeteer');

async function getSiteCSS(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

    // Extract CSS content directly on the page
    const cssContent = await page.evaluate(() => {
        const stylesheets = Array.from(document.styleSheets);
        let cssText = '';

        stylesheets.forEach((stylesheet) => {
            try {
                const rules = Array.from(stylesheet.cssRules);
                rules.forEach((rule) => {
                    cssText += rule.cssText + '\n';
                });
            } catch (error) {
                // Handle errors or skip problematic stylesheets
                console.error('Error reading stylesheet:', error.message);
            }
        });

        return cssText;
    });

    console.log(cssContent);

    fs.writeFile('css.json', JSON.stringify(cssContent), (err) => {
        if (err) throw err;
        console.log('File saved');
    });

    await browser.close();
}

// Replace 'https://example.com' with the desired URL
getSiteCSS('https://www.swcg.com');

