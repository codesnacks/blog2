---
title: JavaScript Autoboxing
spoiler: What is autoboxing in JS?
date: '2020-01-15'
---

Let's start with the question of **"What are primitive types, and how are they defined?"**.

Primitive types don't have methods or properties on them.

Let's see some primitive types in JS. Let's try a number and a string.

```js
const name = "Doggo"
const age = 7

console.log(typeof name) // string
console.log(typeof age) // number
```

**name** has the primitive type string, **age** is a number. Both of these primitive types should not have any properties or methods on them. Let's check that:

```js
console.log(name.length) // 5
console.log(age.toString()) // "7"
```

Why does this work and not throw an error? It looks like both of the primitive types are actually objects! But they're not! They just behave like objects because of **autoboxing**. Whenever we try to access a method or property on a primitive, that primitive is wrapped into an object. That's called autoboxing. Autoboxing will connect the primitive to the related built-in prototype object. In our case that's [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [Number.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number). This gives us access to the prototype methods and properties.