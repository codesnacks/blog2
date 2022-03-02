---
title: Capitalize / uppercase first letter JavaScript
date: '2019-07-06'
spoiler: How to uppercase / capitalize a word in JavaScript
---

There is no built in method to capitalize a string in JS. So we have to accomplish that functionality ourselves. We therefore combine some functions: 
* we take the first character of the string ([charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt))
* we transform this character to an uppercase character ([toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase))
* we append the rest of the string ([slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice))

```javascript
const lowercase = 'codesnacks';
const capitalized = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
```

Of course we can put this into a reusable funtion, that we can 

```js
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

capitalize('codesnacks'); //'Codesnacks'
capitalize('c'); // 'C'
capitalize(0); // blows up in flames
capitalize(true); // blows up in flames, too


```

This works for perfectly for all strings, as we can see. But if you pass it a different variable type it'll break with something like this:

```
VM88:1 Uncaught TypeError: s.charAt is not a function
    at capitalize (<anonymous>:1:27)
    at <anonymous>:1:1
```

This is because the `charAt` function is only defined on strings. So to be more robust we should add a little check for the argument type to make our capitalize function more robust.

```js
const capitalize = s => {
  if (typeof s !== 'string') {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
};

capitalize('codesnacks'); //'Codesnacks'
capitalize('c'); // 'C'
capitalize(0); // 0
capitalize(true); // true
```

This now works for all variable types, because it leaves everything that isn't a `string` untouched.