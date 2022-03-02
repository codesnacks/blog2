---
title: How can you export an imported module in one single line?
spoiler: 
date: '2020-04-25'
---

```
export { default as Module } from './module/Module';
```

is the standard ES6 way, as long as you don't need Module to also be available inside the module doing the exporting.