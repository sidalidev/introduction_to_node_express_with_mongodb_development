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

##### Note
Don’t forget to create a `.gitignore` file in your project with content
```
node_modules/
``` 
This will make `git` **ignore** the folder, because sometimes it can be larger than 100mb and we don’t want to push that kind of folder.

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

### 2.2. Requests with Express
Each client request can be handled simply by using  those main verbs: `get`, `post`, `put`, `delete`

#### Example: I want to send a `JSON` response for everyone who will fetch at `/` 
```javascript
app.get("/", (req, res) => {
  res.json({
    name: "Louis croix-vé-bâton"
  })
})
```

We can see that the `API` is similar to **vanilla Node** but slightly different, the `get` function takes two parameters:
- Which route ?
- Which function do you want me to call when a `get` request happens ? I’ll call it with:
	-  a `req` **object**, in order to  give you all the **request’s** informations
	- a `res` **object** in order for you to call it so we can give an answer back

**No more** `if…else…` like we did in **vanilla Node**, this is much simpler.
**Each request** has its **own handler**.

#### Send back `HTML` files
For this, we’re going to use the `path` module, who’s that Pokémon ?!
```javascript
const path = require('path')
```
`path` is a **Node built-in library**, and it provides us tools for **resolving** paths. 

By using it that way:
```javascript
path.resolve(__dirname,'index.html') 
```
`path.resolve` function will return us the **right** absolute path to the resource by taking care of **OS** differences: **Windows** and **Mac**/**Linux** are not written the same way. You know… the `/` vs `\` thing 😅.

Let us replace our `JSON` response in our `GET /` request by a good old `HTML` response:
```javascript
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + '/pages','home.html'))
})
```

**Don’t forget** to save, stop `node` **process** in your terminal and start over to see changes.

If you do a `console.log` of what return the `path.resolve` function you’ll see this for example (in my machine):
`/Users/sid/Code/introduction_to_node_express_with_mongodb_development/pages/home.html`

So, basically, this is saying, OK `res.sendFile('my/file/is/here/home.html)`

This is so much simpler be cause in **Node** you’d write more line to do the same thing.

### 2.3. Asynchronous with Call Back Functions 
We have been seeing a few examples of code with callback functions. Callback functions are an important aspect in **Node**. that helps support tasks to be done asynchronously. That is, rather than waiting for one task to complete before executing another e.g. in **PHP**:
 
Task 1 -> Task 2 -> Task 3 -> Task 4 -> Completion 

**Node** allows the possibility to performs tasks in parallel, where no task is blocking another. 
Task 1 -> Task 2 -> Task 3 -> Task 4 -> 
How **Node** supports asynchronous code is with **callback functions**. For example, the below request handlers do not have to be executed **synchronously**. 
```javascript
app.get('/', (req, res) => { // query database 
}) 
app.get('/about',(req, res) => { res.sendFile(path.resolve(__dirname + '/pages/','about.html')) 
}) 
```

That is, if a request for ‘`/ ` and `/about` **comes in together,** it **doesn’t have** to be the case that **one request** has to **be completed** before **serving the other**. **Both** tasks **can begin** at the **same time**.

It can be that the task to **query the database** starts and while the database is thinking, the second request for `about.html` can be responded. Our code is not doing two things at once, but when a task is waiting on something, the other task can execute. **Asynchronous** code like **callback functions** thus execute much faster. 

### 2.4. Serving Other HTML files 

Let’s implement others routes simply by adding:
```javascript
const pagesDirectory = `${__dirname}/pages` // equivalent to __dirname + '/pages'

// GET /
app.get("/", (req, res) => {
  res.sendFile(path.resolve(pagesDirectory,'home.html'))
})

// GET /about
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(pagesDirectory,'about.html'))
})


// GET /adlsfalsdfjk a.k.a Everything that is no matched above
app.get("*", (req, res) => {
  res.sendFile(path.resolve(pagesDirectory,'404.html'))
})
```
We only covered `GET` requests for the moment by in the next days, we will do more with `POST`, `PUT`, `DELETE` 🚀


