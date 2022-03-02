---
title: JS Coercion
spoiler:  Implicit and explicit coercion 
date: '2020-01-18'
---

Let's talk about Coercion today. Simply put, coercion is the process of changing a value from one type to another. Let's see a very simple example.

```js
const number = 42
const string = String(number)
```

We're talking about explicit coercion in this example. We explicitly tell JavaScript to coerce a number into a string. The same is possible for other values. Let's see some more examples of **explicit coercion**.

```js
const num = Number("10")
const bool = Boolean(0)
const float = parseFloat("10.2")
const anotherNum = parseInt("19")
const string = String(99)
```

But there are also cases (actually a lot of them) where **implicit coercion** will happen in JS.

```js
const arr = []

if(arr.length){
   // do something
}
```

You've probably written some code like this before. In this case, implicit coercion happens in the if statement, because the if statement takes a boolean as an argument and `arr.length` returns a number. 

Another example of implicit coercion is, for example, when you use a number in a string literal like this:

```js
const num = 42
const str = `${num} pizzas for our office, please`
```

In the string literal, `num` is implicitly coerced into a string. Of course, we could also do this explicitly:

```js
const num = 42
const str = `${String(num)} pizzas for our office, please`
```

Also, coercion always happens, when you use a double equal to compare two values. It doesn't happen, when you use the triple equal:

```js
console.log("42" == 42) // true
console.log("42" === 42) // false
```

In the `"42" == 42` case, implicit coercion is done by JS, to compare equal types. That's why the comparison is true. The triple equal `===` does no implicit coercion, that's why this comparison is false.
