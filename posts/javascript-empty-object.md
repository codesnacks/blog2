---
title: Check if an object is empty in JS
spoiler: 
date: '2020-01-16'
---

Checking if an object is empty, is a quite common task. Let's figure out how to accomplish it.

Here we create an empty object using the object literal syntax.

```js
const someObject = {}
```

You might be tempted to compare this object, to an empty object like this:

```js
const someObject = {}
console.log(someObject === {}) // false
```

That's incorrect. Even if you compare two objects via the object literal, they're not equal:

```js
console.log({} === {}) // false
```

This is because you're comparing reference and not values. The reference to these objects isn't the same, even though the value is the same.

So how can we actually check if an object is empty? You could do so, by checking if it has any properties. We could use the [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) method, which returns an array of all the properties of the object.

```js
const someObject = {}
console.log(Object.entries(someObject).length === 0) // true
```

If you want to create a small function, it would make sense to first check if we're actually dealing with an object, to not throw any errors, if a wrong data type is checked:

```js
const isEmpty = obj => obj.constructor === Object && !Object.entries(obj).length

// let's see if it works:
const o = {}
console.log(isEmpty(o)) // true

o.name = "foo"
console.log(isEmpty(o)) // false
```

Also, lodash offers an [isEmpty](https://lodash.com/docs/4.17.15#isEmpty) utility function to check if an object is empty:

```js
const someObject = {}
console.log(_.isEmpty(someObject)) // true
```