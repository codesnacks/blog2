---
title: Cloning / Copying Objects in JS
spoiler: The pitfalls 🕳️ of cloning objects in JS (with Object.assign & object spread)
date: '2020-01-14'
---

So how do you clone or copy an object in JS? Right ... use **Object.assign** or the **Object spread operator**. Let's see both of them in action:

```js
const dog = { name: "Doggo" }
const clonedDogAssign = Object.assign({}, dog)
const clonedDogSpread = { ...dog }
```


That works perfectly fine. You can check that it's actually not the same object anymore, but that it still has the same properties

```js
console.log(dog === clonedDogAssign) // false
console.log(clonedDogAssign) // {name: "Doggo"}
console.log(dog === clonedDogSpread) // false
console.log(clonedDogSpread) // {name: "Doggo"}
```

Alright. Now let's change the name of our cloned dog and see what'll happen to the original dog.

```js
clonedDogAssign.name = "Dolly"
// let's check the clone
console.log(clonedDogAssign) // {name: "Dolly"}
// and the original
console.log(dog) // {name: "Doggo"}
```

So nothing happens to the original when the clone is changed. **Perfect!** ... as long as you're not dealing with **nested objects**!

Let's check that!

```js
const dog = { name: "Doggo", owner: { name: "Ben" } }
// clone the dog
const clonedDog = { ...dog }
// change the name
clonedDog.name = "Dolly"
// and change the name of the owner
clonedDog.owner.name = "Louis"

console.log(clonedDog) // {name: "Dolly", owner: {name: "Louis"}}
console.log(dog) // {name: "Doggo", owner: {name: "Louis"}}
```

What? So the owner of the original dog changed because we changed the owner of the clone? This is because the object spread operator, as well as Object.assign, does not clone the values of nested objects, but copies the reference to the nested object. That's called **shallow copying**. 

So how can we deep clone / deep copy an object, so that also the values of nested objects are cloned?

## How to deep clone / deep copy JS objects

The tricked I learned back in the days is JSON serialization. An object is converted to JSON and then parsed again to get a new object. That trick works only as long as you're just dealing with *primitive types* or *objects*. For everything else, it won't work! Use this with caution!

```js
const dog = { name: "Doggo", owner: { name: "Ben" } }
const clonedJsonDog = JSON.parse(JSON.stringify(dog))
clonedJsonDog.name = "Dolly"
clonedJsonDog.owner.name = "Louis"
console.log(clonedJsonDog) // {name: "Dolly", owner: {name: "Louis"}}
console.log(dog) // {name: "Doggo", owner: {name: "Ben"}}
```

Perfect! The original is kept untouched! So that's a working solution. This solution is not enough if you're dealing with functions or symbols within your objects. There's just no other way than to keep the reference to these. The JSON trick can't handle these types. In such a case the lodash clonedeep method is probably the best way to go.

```js
// npm i lodash
const clonedeep = require('lodash.clonedeep')

const dog = { name: "Doggo", owner: { name: "Ben" } }
const deepClone = clonedeep(dog)
deepClone.name = "Dolly"
deepClone.owner.name = "Louis"
console.log(deepClone) // {name: "Dolly", owner: {name: "Louis"}}
console.log(dog) // {name: "Doggo", owner: {name: "Ben"}}
```

