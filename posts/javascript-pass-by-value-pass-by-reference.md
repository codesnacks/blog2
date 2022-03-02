---
title: JS pass by value / pass by reference
spoiler: Is JavaScript using pass by value or pass by reference?
date: '2020-01-12'
---

To gain a deeper understanding of JS we'll have a look at methods and how arguments are passed. There are two ways: **pass by value** and **pass by reference**. Let's find out what's used in JS! 


Let's have a look at **primitive data types** or **primitive values** first.

```js
console.log(typeof "some string") // string
console.log(typeof true) // boolean
console.log(typeof 42) // number
console.log(typeof 42n) // bigint
console.log(typeof Symbol()) // symbol
console.log(typeof undefined) // undefined
```

You could also add **null** to the primitive types, but that's a confusing thing. It's an object, even though it should actually not be one. That's why I'll leave it out here.

So let's see how these primitive types are handled when we pass them to a method as arguments:

```js
let x = "dog"

function change(y) {
    y = "cat"
} 

change(x)

console.log(x) // dog
```

We can see in this example, that **x was passed by value**. That means, that the actual value of x which is `"dog"` was passed to the change method. Even though the argument was reassigned in the change method, that didn't change our **x**. 

If JS would use *pass by reference* not the value, but the reference to the variable would be passed into a method. Reassigned the argument would actually change the reference of the original variable.


Objects are a bit special, though. An object's value is its reference. Sounds confusing? Let's have a look at an example to explain it


```js
function changeMember(obj) {
    obj.name = "Doggo"
}

function changeReference(obj) {
    obj = {name: "Birdo"}
}

const cat = { name: "Kitty" }
changeMember(cat); // {name: "Doggo"}

changeReference(cat)
console.log(cat); // {name: "Doggo"}
```

You can see, that **also objects are passed by value**. It's not possible to change the original object by reassigning the argument of the `changeReference` method. But, and that can be confusing sometimes if you change a property of an object, that was passed as an argument to a method like in `changeMember`, that change will be reflected in the original object. That's because the value of an object is basically just its reference. When calling `changeMember` we're not trying to reassign the variable, but we change a property, which also changes the underlying referenced object.
