---
title: How to check if a file exists in Node.js
spoiler: ###
date: '2019-07-06'
---

To check if a file exists using Node.js you can utilize the [file system](https://nodejs.org/api/fs.html) (`fs`) module. You have two options doing so: 
+ in a synchronous (blocking) way with [fs.existsSync()](https://nodejs.org/api/fs.html#fs_fs_existssync_path)
+ and in an asynchronous way with [fs.access()](https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback)

Let's see how it works in the synchronous/blocking way:

```javascript
const fs = require('fs')

const path = './file.js'

if (fs.existsSync(path)) {
  console.log("file exists");
} else {
  console.log("file does not exist");
}
```

If you need to check the existence of a file in an asynchronous/non-blocking manner, then this could help you:

```javascript
const fs = require("fs");

const path = "./file.js";

fs.access(path, fs.F_OK, err => {
  if (err) {
    console.log("file does not exist");
    return;
  }
  console.log(" file exists");
});
```
