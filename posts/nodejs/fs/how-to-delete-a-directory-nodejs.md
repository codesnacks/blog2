---
title: How to delete a directory with Node.js
spoiler: ###
date: '2019-07-06'
---

To delete a directory using Node.js you can utilize the [file system](https://nodejs.org/api/fs.html) (`fs`) module. You have two options doing so: 
+ in a synchronous (blocking) way with [fs.unlinkSync()](https://nodejs.org/api/fs.html#fs_fs_unlinksync_path)
+ and in an asynchronous way with [fs.unlink()](https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback)

Let's see how it works in the synchronous/blocking way. The method will throw an error if the file doesn't exist, or if it's given a directory. So you should wrap it in a try/catch block.

```javascript
const fs = require("fs");

const path = "./file.js";
try {
  fs.unlinkSync(path);
  console.log("file deleted");
} catch (err) {
  // there was an error deleting the file
  console.error(err);
}
```

If you need to check the existence of a file in an asynchronous/non-blocking manner, then this will help you. The callback function which is passed to unlink will contain an error parameter, that is not undefined if the file didn't exist, of if it was applied to a directory.

```javascript
const fs = require("fs");

const path = "./file.js";

fs.unlink(path, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file deleted");
});
```

Both method work only on files and not on directories. Here you can find out [how to delete a directory](). 
