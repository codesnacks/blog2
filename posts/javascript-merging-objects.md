---
title: Merging multiple objects into one with JavaScript
spoiler: 
date: '2020-01-26'
---

Let's say you have multiple objects that you want to merge. How can we accomplish this? Without using any libraries there are two ways to do this in JavaScript:

* `Object.assign``
* `...` - the object spread operator

Now let's see `Object.assign` in action:

```js
const a = { x: "x", y: "y" }
const b = { z: "z" }

// create a new object and assign a & b
const c = Object.assign({}, a, b)
console.log(c) // {x: "x", y: "y", z: "z"}
```

The same works also with the object spread operator:

```js
const a = { x: "x", y: "y" }
const b = { z: "z" }

// create a new object and spread a & b
const c = { ...a, ...b }
console.log(c) // {x: "x", y: "y", z: "z"}
```

Cool, so we can now merge multiple objects into one. You can of course also merge more than two.

But what happens when there are properties, that are named the same in both objects?

Let's see:

```js
const a = { x: "x", y: "y", who: "I'm a" }
const b = { z: "z", who: "I'm b" }

const c = { ...a, ...b }
console.log(c) // {x: "x", y: "y", z: "z", who: "I'm b"}
```

So if two objects contain properties that are named the same, like the `who` property, the object that is used last will overwrite the properties of the former object. In our case `who` of `a` will be overwritten by `who` of `b`. 

That because first, all the properties and values of `a` are put into the new object. Then the properties and values of `b` are put into the object, overwriting properties, that are already there.