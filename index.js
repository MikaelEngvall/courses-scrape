const fs = require('fs');
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://swcg.com/');

  //  Get a screenshot of the page
  await page.screenshot({ path: 'example.png', fullPage: true });
  // await page.screenshot({ path: 'example.png' });

  //  Get a PDF of the page
  // await page.pdf({ path: 'example.pdf', format: 'A4' });

  //  Get HTML of the page
  // const html = await page.content();
  // console.log(html);

  //  Get text of the page
  // const title = await page.evaluate(() => document.title);

  //  Get text of the page
  // const text = await page.evaluate(() => document.body.innerText);


  //  Get all links
  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll('a'), (e) => e.href)
  // );
  // console.log(links[6]);
  // await browser.close();

  //  Get all images
  const images = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img'), (e) => e.src)
  );
  console.log(images);

  // await page.goto(links[6]);
  // const omoss = await page.evaluate(() => document.body.innerText);

  //  Get courses
  // const courses = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll('#courses .card'), (e) => ({
  //     title: e.querySelector('.card-body h3').innerText,
  //     level: e.querySelector('.card-body .level').innerText,
  //     url: e.querySelector('.card-footer a').href,
  //     promo: e.querySelector('.card-footer .promo-code .promo').innerText,
  //   }))
  // );

  // Get courses using $$eval
  // const courses = await page.$$eval('#courses .card', (elements) =>
  //   elements.map((e) => ({
  //     title: e.querySelector('.card-body h3').innerText,
  //     level: e.querySelector('.card-body .level').innerText,
  //     url: e.querySelector('.card-footer a').href,
  //     promo: e.querySelector('.card-footer .promo-code .promo').innerText,
  //   }))
  // );

  // console.log(courses);

  // Save data to JSON file
  //  fs.writeFile('courses.json', JSON.stringify(courses), (err) => {
  //    if (err) throw err;
  //    console.log('File saved');
  //  });

  // fs.writeFile('html.json', JSON.stringify(html), (err) => {
  //   if (err) throw err;
  //   console.log('File saved');
  // });
  // fs.writeFile('omoss.json', JSON.stringify(omoss), (err) => {
  //   if (err) throw err;
  //   console.log('File saved');
  // });
  // fs.writeFile('title.json', JSON.stringify(title), (err) => {
  //   if (err) throw err;
  //   console.log('File saved');
  // });
  // fs.writeFile('links.json', JSON.stringify(links), (err) => {
  //   if (err) throw err;
  //   console.log('File saved');
  // });

  await browser.close();
}
run();
