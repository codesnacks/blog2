---
title: Replace All in JavaScript
spoiler: JS replaceAll
date: '2019-07-06'
---

**tldr**
```js
// replaces all underscores ("_ ")with a space (" ")
const result = "replace_all_example_in_js".replace(/_/g, " ");
```


JavaScript does not have a `replaceAll` function, that you may know from other languages. But you can use the `replace` function to mimic `replaceAll` by using a regular expression.

```javascript
const text = "replace_all_example_string";

const x = text.replace("_", " ");
// => "replace all_example_string"

// to use a regular expression you have to use a different delimiter for the search argument
const y = text.replace(/_/, " ");
// => "replace all_example_string"

// this uses the `g` flag for the regular expression, which stands for greedy 
// mimics replaceAll
const z = text.replace(/_/g, " ");
// => "replace all example string"
```

The `replace` method takes two arguments:
+ `search` the String or regular expression, that such be replaced
+ `replace` the (String) replacement for `search`

By using a regular expression for the `search` parameter you can easily mimic a replace-all-functionality in JS: by using the greedy flag `g` in your regular expression, you can replace all the occurrences of your search argument. e.g  `/_/g` will replace all occurrences of `_` within a given String. 

