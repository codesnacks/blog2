---
title: JavaScript check if undefined
spoiler: How to check if a variable is undefined in JavaScript
date: '2019-07-15'
---
How do I check if a variable is undefined in JavaScript?

**tldr**
```js
typeof xyz === "undefined"
// ==> true
```

You might be tempted to check a variable with something like

```js
if(!xyz) {
    // this will NOT WORK! It crashes because xyz is not defined
    console.log("not defined");
}
```
Doing so will lead to an error like the following:

```
Uncaught ReferenceError: xyz is not defined
```

So the solution is, as already mentioned to use the `typeof` operator