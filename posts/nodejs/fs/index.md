---
title: File System (fs) Module of Node.js
TODO: link callback article; link promise article
spoiler: ###
date: '2019-07-06'
---

This series will in the future contain examples and uses cases of all functions of the [file system](https://nodejs.org/api/fs.html) (`fs`) module of Node.js. For all methods there is always a **synchronous / blocking** and one or two **asynchronous / non-blocking** options. 

The **asynchronous** methods take a callback parameter, which is called whenever the method was executed. It will contain an error argument, that will be undefined if the execution was successful and the error otherwise.

The **fs.promises API** provides an alternative set of **asynchronous** file system methods that return **Promise** objects rather than using callbacks. The API is accessible via require('fs').promises.