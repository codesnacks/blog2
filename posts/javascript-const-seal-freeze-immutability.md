---
title: const, seal, freeze & immutability in JS
spoiler: 
date: '2020-01-11'
---

Immutable data can not be changed once created. Most of the times this leads to simpler and less error-prone code. That's why immutable data structures are quite often a hot topic. Let's see what we can achieve with JS!

So *const* for the win you might say, because this way you create constants, right? Well ... no. With const you create a variable, that can't be reassigned.

So the following code won't work:

```js
const x = "Dog"
x = "Cat" // crashes with "Uncaught TypeError: Assignment to constant variable."
```

With *let* and *var* it's possible to reassign variables, of course.

So, but why isn't const immutable then? Let's see what happens, when we use an object instead of a primitive value.

```js
const obj =  { name: "Doggo" }
// let's change a property
obj.name = "Kitty"
// and add one
obj.animal = "cat"

console.log(obj) // {name: "Kitty", animal: "cat"}

// reassigning will not work
obj = { name: "Birdo" } // crashes with "Uncaught TypeError: Assignment to constant variable."
```

So we can still add and change properties of objects. But there is a `seal` method and a `freeze` method on Object, that basically do exactly what they say. Let's have a look at *seal* first:

```js
const obj =  { name: "Doggo" }
// let's seal our object
Object.seal(obj)
// let's change the property again
obj.name = "Kitty"
// and also add one again
obj.animal = "cat"

console.log(obj) // {name: "Kitty"}
```

So what happened here? The *name*-property could be changed, but the *animal* property could not be added. That's exactly what *seal* does: it prevents properties to be added to an object. Existing properties can still be changed. 

The *freeze* method prevents both, changing as well as adding/deleting properties.

```js
const obj =  { name: "Doggo" }
// let's freeze our object
Object.freeze(obj)
// let's change the property again
obj.name = "Kitty"
// and also add one again
obj.animal = "cat"

console.log(obj) // {name: "Doggo"}
```

Okay, so using *const* in combination with *Object.freeze* will give us immutability, right? Well ... again no. The freeze method is no so called deep freeze. This means, that only your first level object is actually frozen; objects within this object aren't. Let's have a look at an example:

```js
// we'll give the dog an owner, that also has a name (mine ;) 
const obj = { name: "Doggo", owner: { name: "Ben" } }
// we'll again freeze the object
Object.freeze(obj)

// and this time we'll change the name of the owner
obj.owner.name = "Bla"

console.log(obj) // {name: "Doggo", owner: {name: "Bla"}}
```

To actually achieve immutability you could create a deep freeze method, to recursivly runs to all object properties and freezes all nested objects. Let me know if you're interested in a tutorial on this!

Or you can use a library like [Immutable.js](https://github.com/immutable-js/immutable-js)