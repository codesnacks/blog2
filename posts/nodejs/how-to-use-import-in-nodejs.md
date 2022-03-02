---
title: How to use import in Node.js
spoiler: ###
date: '2019-07-06'
---

Most code snippets and example use `import`([ES modules](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import)) instead of `require` ([CommonJS](http://www.commonjs.org/specs/modules/1.0/)) to import a module.

```javascript
import express from "express";
// instead of
const express = require('express');
```

If you're using [babel](https://babeljs.io/), it will work in a Node.js environment. Without babel you'll get an error like this:

## Unexpected identifier import
```
(function (exports, require, module, __filename, __dirname) { import express from "express";
                                                                     ^^^^^^^

SyntaxError: Unexpected identifier
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:656:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
```

Starting with Node.js 12 there is an experimental flag, that enables ES modules in Node.js directly. For it to work you will have to 

+ add `"type": "module"` to your `package.json` ([example](https://github.com/codesnacks/use-import-in-nodejs/blob/master/package.json#L6))
+ start your application with the `--experimental-modules` flag e.g. `node --experimental-modules app.js` ([example](https://github.com/codesnacks/use-import-in-nodejs/blob/master/package.json#L8))

Instead of adding the `"type": "module"` you could also name all of your JS files `.mjs` instead of `.js`.

The `require` syntax stops working if you do these changes!

Here is a full [example app](https://github.com/codesnacks/use-import-in-nodejs), that includes the necessary changes using the `"type": "module"`  in the `package.json`

This works with Node.js starting with version 12. Here you can find the [official documentation](https://nodejs.org/api/esm.html#esm_ecmascript_modules).