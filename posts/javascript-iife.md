---
title: IIFE - Immediately Invoked Function Expressions in JavaScript
spoiler: 
date: '2020-01-22'
---

You might have heard of IIFEs or you might already have seen some syntax like this:

```js
(function() {
  // do some stuff
})()
```

or as an arrow function like this

```js
(() => {
  // do some stuff
})()
```

These are immediately invoked function expressions. But what are they good for?

They're basically used to encapsulate code. Variables that are declared within an IIFE are **isolated** and neither the function itself nor the variables inside of it will pollute the global object, even if you use `var` which has function scope.

Let's have a closer look at the syntax. 

```js
// we basically create a function with brackets, which makes it an expression and call it immediately
(/* some function */)()
```

All the variable declarations are completely encapsulated. There's no way to access a variable from the outside. The following snippet will log the variable `x`, but `x` is not accessible from outside the IIFE.

```js
(() => {
  const x = "dev"
  console.log(x)
})()

console.log(x) // undefined
```
