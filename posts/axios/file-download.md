---
title: Axios Download Files & Images in Node.js
date: "2019-08-02"
---

Axios Download Files & Images in Node.js

https://futurestud.io/tutorials/download-files-images-with-axios-in-node-js

````
const fs = require("fs");
const path = require("path");
const axios = require("axios");

async function downloadImage() {
    const url = "https://unsplash.com/photos/AaEQmoufHLk/download?force=true";
    const imgPath = path.resolve(__dirname, "images", "code.jpg");
    const writer = fs.createWriteStream(imgPath);

    const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
    });
}

await downloadImage();

```
````
