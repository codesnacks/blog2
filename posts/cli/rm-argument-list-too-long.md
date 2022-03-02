---
title: rm * Argument List too long
spoiler: How to delete all files from a giant directory
date: '2020-04-02'
---

So you want to delete all files in a directory, probably using something like `rm *`, but you get an error like *Argument list too long*? That's because you're passing every filename of your directory as an argument to the `rm` function. And these might be too many files.

Here's one of the possible solutions:

```
find -type f -print0 | xargs -0 rm
```