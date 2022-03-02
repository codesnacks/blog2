---
title: Optionally setting an object property
spoiler: How to optionally set an object property / member
date: '2020-09-30'
---

Let's assume we only want to add an object property if some condition is true. We can do this using an if-statement of course:

```js
const someCondition = true;
const anotherCondition = false;
const myObject = {
  name: "codesnacks",
};

if(someCondition){
  myObject.author = "Ben";
}

if(anotherCondition){
  myObject.platform = "codesnacks.net";
}

console.log(myObject); // {name: "codesnacks", author: "Ben"}
```

We can achieve the same using the object spread operator ( `...`) in combination with the condition when creating the object. No additional if-statement is needed. This is especially elegant if an object has multiple conditional properties.

```js
const someCondition = true;
const anotherCondition = false;
const myObject = {
  name: "codesnacks",
  ...(someCondition && { author: "Ben" }),
  ...(anotherCondition && { platform: "codesnacks.net" }),
};

console.log(myObject); // {name: "codesnacks", author: "Ben"}
```