---
title: JavaScript String contains
spoiler: How to check if a string contains a substring in JavaScript
date: '2019-07-14'
---
How do I check if a string contains a substring in JavaScript?

**tldr**
```js
"codesnacks".includes("snacks");
```

JavaScript does not have a `contains` function, that you may know from other languages, but it includes the `include` function, which can be used to check if a string contains a substring.

This method has been added to the ECMAScript 2015 specification and may not be available in all JavaScript implementations yet. IE for example does not support the `includes` method. You can either polyfill it or just use the `indexOf` method, that's also available on the String prototype.


```javascript
const text = "codesnacks";

text.includes("snacks");
// => true

text.includes("foo");
// => false

text.indexOf("snacks");
// => 4

text.indexOf("code");
// => 0

text.indexOf("foo");
// => -1
```

`indexOf` returns 
+ the `position` of the **first occurrence** of the substring. If `text` starts with the substring the position will be `0`!
+ `-1` if the substring can't be found
