---
title: Environment Variables with Node.js
spoiler: What's the best way to handle configurations or secrets like API keys with Node.js?
date: '2019-07-31'
---

What's the best way to handle configurations or secrets like API keys with Node.js? One simple way is to use environment variables. 

You could pass them directly to your node command or add them in the package.json. Let's have an `index.js`, that looks like

```
const apiKey = process.env.API_KEY
console.log(apiKey)
```

You can for example start your application with
```
API_KEY=super-secret-key node index.js
```

You can also put the same into your `package.json`

```json
  ...
  "scripts": {
    "start": "API_KEY=super-secret-key node index.js"
  },
  ...
```

and start your application with `npm start`. That way you at least don't have to type your API key every time you start your application.

The problem with this approach is, that you have to commit your package.json to your repository. But you should not share secret keys like this. So there's a better way to do it: using a `.env` file.

So you can add your API key to this `.env` file and consume it, like before, with the `dotenv` library.

run 
```
npm install dotenv
```
to install the library.

Then import and use it like this in your application:

```js
require('dotenv').config();

const apiKey = process.env.API_KEY
console.log(apiKey)
```



```
API_KEY=super-secret-key
```

Ideally, you would then also create an entry in your `.gitignore` to exclude your `.env` file from version control.

Put this in the `.gitignore`
```
.env
```

This way you don't leak any secrets. 
