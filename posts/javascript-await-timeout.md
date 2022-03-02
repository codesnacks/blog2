---
title: JavaScript await timeout
spoiler: Build a custom timeout function that you can await
date: '2022-02-06'
---

Sometimes you probably want to write code like that:

```js
doX()
sleep(2000)
doY()
```

In JavaScript that's not possible. Usually you would use a setTimeout function with a callback:

```js
doX();
setTimeout(() => { doY() }, 2000)
```

That works, but if you have code in which 

```js
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

await timeout(2000);
```

