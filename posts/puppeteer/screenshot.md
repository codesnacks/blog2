---
title: Create a screenshot of a webpage with Javascript
spoiler: Creating a screenshot of a webpage with puppeteer
date: '2019-09-15'
---

Automatically creating a screenshot of a webpage used to be hard. Using puppeteer it became quite simple. Let's create a screenshot of the codesnacks homepage.

```javascript
const puppeteer = require("puppeteer");

// we're using async/await - so we need an async function, that we can run
const run = async () => {
  // open the browser and prepare a page
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  // set the size of the viewport, so our screenshot will have the desired size
  await page.setViewport({
      width: 1280,
      height: 800
  })

  await page.goto('https://codesnacks.net/')
  await page.screenshot({
      path: 'codesnacks.png',
      fullPage: true
  })

  // close the browser 
  await browser.close();
};

// run the async function
run();
```

That snippet will create a screenshot of the whole page, that's 1280 pixel wide. Of course you can also set other sizes. The screenshot will be saved in the same directory your script lives in. You can change the directory and name of the file in the `path`.

