---
title: Dynamically creating and accessing properties on objects in JS
spoiler: 
date: '2020-01-22'
---

Today we'll learn how to dynamically create and access properties on JS objects.

There are two ways to set and access properties on objects: 
* the do notation
* the bracket notation

Let's see these in action:

```js
// create an empty object
const pastry = {}

// set a name property on the object using the dot notation
pastry.name = "waffle"

// set a deliciousness property on the object using the bracket notation
pastry["deliciousness"] = 11

// you can also use both notations to access properties again
console.log(pastry.deliciousness) // 11
console.log(pastry["name"]) // waffle
```

But how would we dynamically set and read these properties? Let's say we would have the name of the property in a variable? 

An example could be a `get` or a `set` method in which you can pass an object and a property. The `set` would of course also take a value.

Let's see these functions:

```js
function get(obj, prop) {
  // return prop on obj
}

function set(obj, prop, value) {
  // set value for prop on obj
}

// create an empty object
const pastry = {};

// use set
set(pastry, "name", "waffle")

// use get
console.log(get(pastry, "name")
```

So how would it work? We can use the bracket notation to dynamically set and get properties. 

```js
function get(obj, prop) {
  // return prop on obj
  return obj[prop]
}

function set(obj, prop, value) {
  // set value for prop on obj
  obj[prop] = value
}

// create an empty object
const pastry = {};

// use set
set(pastry, "name", "waffle")

// use get
console.log(get(pastry, "name")) // waffle
```
