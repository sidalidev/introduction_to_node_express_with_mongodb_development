# 2. Introduction to npm and Express
## Installing Custom Packages with `npm`
In the first part, we imported only **Node** built-in packages like: `http`, `fs`. Now let’s have some fun with the large range of packages that the community offers.

The packages are hosted in a site called **npmjs.com**. You can search for any package, read its doc and so on.

We  said before that vanilla **Node** apps can be difficult to write and maintain and we talked about **Express**. **Express** will be one of those packages that we will install from **npm**.

## Introduction to Express 
**Express** is a framework that acts as a light layer on top of **Node**. It make our life easier by providing helpful features, organising our application functionalities with middleware, routing, dynamic HTML views and more.
### Installation
#### Project initialisation feat.`package.json`
Before hand, we’ll need to initialise the project with this command:
```bash
npm init # and say yes to everything it asks for
```
This will initialise our project and create a `package.json` file. This file will contain all our project configuration, from the name, the dependencies (packages that it needs to run) and more.

Then, simply hit:
```bash
npm install express
```
When finished, you’ll see that it has added a line inside `package.json` under `dependencies`. 

Dependencies contain the dependency packages and their version numbers. Each time we install a package, **npm** saves it here to keep track of the packages used in our app. 

#### Project dependencies feat. `node_modules/`
If you open and explore `node_modules/`, you should be able to locate the `express/`package. The reason why we see many other packages in `node_modules/` even though we only installed `express`is because `express` depends on these other packages and they were installed when `express` was installed. These other packages are dependencies of Express. The file `package-lock.json` tracks the versions of all the dependencies of Express. 

### 2.1. Intro
An example is better than any other word, let us code!
Replace the content of our `server.js` file with:
```javascript
const express = require('express')
```
This will pull `express` from `node_modules/` directory.

We will implement the same features we did before but this time… we will use **Express** !
```javascript
const express = require('express')
const app = express() // starts a new Express app

app.listen(3000, () => {
	console.log('App listening on port 3000')
})
```

See ? No `http` import of something… **Express** will take care of everything for us 🚀.
