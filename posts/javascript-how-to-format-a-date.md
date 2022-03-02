---
title: How to format a date in JavaScript
spoiler: Formatting dates in JS
date: '2020-01-15'
---

Formatting dates is a common task. Let's have a look on how to accomplish this.

Let's create a **Date** object to start with:

```js
const date = new Date('January 15, 2020 23:22:13')
```


console.log(new Intl.DateTimeFormat('en-US').format(date));
