---
title: Some tips on using the JS console (console.log & console.table)
spoiler: Some 🔥 tips on using the JS console (console.log & console.table)
date: '2020-01-11'
---

You've probably all seen the "Don't console.log, use the debugger!" posts. There is truth in them of course, but in reality, console.log is super useful and a quick and simple debug method. So let's learn some helpful, useful and maybe even unexpected use cases of console.log

Using console.log to print values on the console is pretty clear. Let's for example print the current date:

```js
const now = new Date()
console.log(now)
```

If you do this with multiple different values, it can become confusing pretty quickly. To keep things tidy, we can also pass multiple arguments. This makes it possible to tag outputs:

```js
const now = new Date()
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

console.log("now", now)
console.log("tomorrow", tomorrow)
```

We could of course also log both values with just one console.log call:

```js
console.log(now, tomorrow)
```

Or we could make use of the *object property value shorthand* and the way console.log handles objects. So instead of just logging our variable, we'll log an object, that we create on the fly:

```js
console.log({ now })
console.log({ tomorrow })
```

This logs something like

```
{now: Sat Jan 11 2020 10:11:29 GMT+0100}
{tomorrow: Sun Jan 12 2020 10:11:29 GMT+0100}
```

Cool! So our variables are automatically tagged this way!

As we're speaking about logging objects - there's another great way to log these using `console.table`.

```js
const luke = {
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male"
}

console.table(luke);
```

This will log a neat table view of the object. The same also works perfectly well for arrays and arrays of objects:

```js
const falcon = {
	"name": "Millennium Falcon",
  "model": "YT-1300 light freighter"
}

const starDestroyer = {
	"name": "Star Destroyer",
  "model": "Imperial I-class Star Destroyer"
}
  
const deathStar = {
	"name": "Death Star",
  "model": "DS-1 Orbital Battle Station"
}

const starships = [falcon, starDestroyer, deathStar]

console.table(starships)
```