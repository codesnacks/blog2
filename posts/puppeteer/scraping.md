---
title: The easiest way to scrape a website with Javascript
spoiler: Scraping a website using puppeteer
date: '2019-09-13'
---

Scraping of webpages is really simple and elegant with Puppeteer. Let's try to scrape [Codesnacks](https://codesnacks.net) and get all the links on the page with anchor and text.

We can easily do this using puppeteer. There's no need to fetch the data first and parse it. You can just let puppeteer visit the page and run your own Javascript in the context of the page. The best way to do this is to first run it in the console of your browser and the just copy it to the code, if you made sure everything works as planned.

```javascript
const puppeteer = require("puppeteer");

// we're using async/await - so we need an async function, that we can run
const run = async () => {
  // open the browser and prepare a page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // open the page to scrape
  await page.goto("https://codesnacks.net");

  // execute the JS in the context of the page to get all the links
  const links = await page.evaluate(() => 
    // let's just get all links and create an array from the resulting NodeList
     Array.from(document.querySelectorAll("a")).map(anchor => [anchor.href, anchor.textContent])
  );

  // output all the links
  console.log(links);

  // close the browser 
  await browser.close();
};

// run the async function
run();
```

Before there was puppeteer there were several tools, that you had to stitch together.
+ a library to fetch the document (e.g. axios or node-fetch)
+ a parser to parse the html and access the dom nodes (e.g. cheerio)

The problem with this approach was, that dynamically rendered pages where even harder to scrape. That's no issue with puppeteer, since it's actually using chrome - just headless.