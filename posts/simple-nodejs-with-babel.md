---
title: How to setup a simple Node.js project with babel 7
spoiler: This post sets you up with babel 7
date: '2019-07-06'
---

Prerequisites:
+ have npm installed
+ have Node.js installed 

Let's start with creating a folder where you keep your application.

```sh
mkdir my-project
cd my-project
```

To start off you'll need an npm project. Running `npm init` usually asks you a couple of questions regarding your application. To speed things up you can use the `-y` flag, that answers all of the question with your default setttings.

```sh
npm init -y
```

This created a `package.json` file, which tells npm 

Let's continue with creating a folder where you'll keep the source code of your application. That folder is usually named `src`. It's good practice to stick to that naming. We will also create the first JavaScript file within this folder. We will name this file `index.js`. It's a convention to name the entry for your application `index`.

```sh
mkdir src
cd src
touch index.js
```

Now let's fill the `index.js` file with some content. We'll just produce some "Hello Node" output by using the `console.log` statement.

```javascript
console.log('Hello Node');
```

To run it switch to your terminal and from the main application folder `my-project` run the following command:

```sh
node src/index.js
```

This will print the "Hello Node" to your terminal. Well done! But we can do even better! Therefore we will utilize the `package.json` file, which was created earlier by running `npm init`. This file contains a `scripts` section, which currently consists only of a "test" script. Let's add a `start` script with the command to run our application.

```
{
  ...
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}
```

Now instead of typing `node src/index` you can run the application by typing `npm start`. The `package.json` is among others used to collect all your scripts to run, test, build ... your application. You can run all scripts in the package.json by using the `npm run` command. Just use `npm run your_command_name`. `npm start` is a shorthand for `npm run start`, because this is used quite often. These shorthands exist for `build` and `test`, too. So you can always just use `npm build` and `npm test` to run these. For all other scripts you'll need to use the complete `npm run ...` command.


## Automatically restarting your application using Nodemon 

Let's see how the authors describe [nodemon][]: "nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected."

<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)" viewBox="0 0 256 292"><path fill="#76D04B" d="M120.947 289.19a13.76 13.76 0 0 0 13.77 0l114.08-65.83a13.77 13.77 0 0 0 6.893-11.935V79.664a13.79 13.79 0 0 0-6.886-11.934L134.724 1.846a13.79 13.79 0 0 0-13.785 0L6.889 67.73A13.786 13.786 0 0 0 0 79.664v131.77c0 4.918 2.627 9.465 6.892 11.925l114.054 65.83"/><path fill="#4F4D3F" d="M201.701 114.111l-5.087-2.928c7.823-11.539 12.498-28.888 6.636-54.825 0 0-13.202 36.999-39.74 35.773L132.437 74.25a8.1 8.1 0 0 0-3.813-1.109h-.717a8.23 8.23 0 0 0-3.824 1.109L93.006 92.13c-26.535 1.23-39.74-35.773-39.74-35.773-5.866 25.936-1.183 43.285 6.638 54.825l-5.087 2.929a8.385 8.385 0 0 0-4.19 7.271l.153 107.332c0 1.498.775 2.885 2.09 3.614a4 4 0 0 0 4.155 0l41.164-23.572c2.605-1.547 4.189-4.276 4.189-7.26v-50.142c0-2.99 1.584-5.762 4.177-7.243l17.529-10.094a8.268 8.268 0 0 1 4.193-1.13 8.16 8.16 0 0 1 4.162 1.129l17.523 10.094a8.333 8.333 0 0 1 4.183 7.242v50.143c0 2.983 1.605 5.733 4.194 7.26l41.154 23.57a4.06 4.06 0 0 0 4.184 0 4.17 4.17 0 0 0 2.077-3.614l.134-107.332c-.003-3.018-1.586-5.784-4.186-7.27v.001z"/></svg>

To install it, use
```
npm i nodemon -D
```

`npm i` is the shorthand for `npm install`. The `-D` tells npm, that this is a dev (development) dependency. So nodemon will only be present in your development environment in this case.


Now all you need to do is to replace the `node` 
```
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...
}
```

[nodemon](http://nodemon.io/)
