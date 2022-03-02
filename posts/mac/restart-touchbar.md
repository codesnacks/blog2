---
title: Restart Touchbar
spoiler:  Sometimes the Mac Touchbar stops working correctly. Here's how you can fix it
date: '2020-10-10'
---

Paste the following in the terminal:

````
sudo pkill TouchBarServer;
sudo killall "ControlStrip";
```

This will ask for your password and restart the TouchBar application without having to restart your machine.