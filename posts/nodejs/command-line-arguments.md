---
title: Dealing with command line arguments in Node.js
spoiler: Reading command line arguments with JavaScript in Node.js
date: '2020-01-19'
---

So you want to use and read command-line arguments in your Node.js application?

So instead of using this to start your application

```js
node app.js
```

We'll learn how to pass some arguments like this:

```js
node app.js waffles 8
```

You can access these arguments via the `process` object, that's built into Node.js. It has an `argv` property, that contains an array of command-line invocation arguments. Let's see what it contains. We use the above invocation and the following `app.js`:

```js
process.argv.forEach((value, index) => {
  console.log(`${index}: ${value}`)
})
```

For my machine, this is what is logged:

```js
0: /usr/local/bin/node
1: /Users/bm/development/codesnacks/app.js
2: waffles
3: 8
```

So the first argument is always the full path of the node command itself. The second argument is the full path of the executed js file. But that's not what we're interested in. We're interested in `waffles` and the amount of them. This is what follows as the third and fourth arguments.

So let's improve our code a bit and get just the relevant arguments by slicing our array accordingly.

```js
const args = process.argv.slice(2)
process.argv.forEach((value, index) => {
  console.log(`${index}: ${value}`)
})
```

```js
0: waffles
1: 8
```

Okay, cool. Now we can use the command-line arguments in our application:

```js
const [pastry, amount] = process.argv.slice(2)
switch (pastry) {
case 'waffles':
    console.log(`Charly Waffles eats ${amount} waffles`)
    break
case 'donuts':
    console.log(`The dog ate ${amount} donuts`)
    break
default:
    console.log('The pastries argument is missing')
}
```

And most probably you can write an application that makes more sense than this one 😁
