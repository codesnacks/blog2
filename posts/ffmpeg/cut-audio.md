---
title: How to cut audio in Node using ffmpeg
date: "2019-08-02"
---

```
execSync(
  `ffmpeg -ss ${start} -i ${audioFilePath} -ac 1 -t ${duration} ${wavFilePath}`
);
```
