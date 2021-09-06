# Introduction to Node, Express and MongoDB Development
# 1. Introduction to Node
## 1.1 What is Node ?
### 1.1.1 Popularity
Node (or Node.js) is one of the most popular server-side frameworks. It's used and backed by huge companies like YouTube, Paypal, Netflix and so on...

### 1.1.2 The internet and server-side languages
Before entering into Node, let us see a very simplified version on how the internet works:
1. I open my Browser
2. I hit: www.9gag.com (for work purpose of course! 😅)
3. www.9gag.com replies with an HTML file

I don't work at **9gag** so I could not tell you how they did that, but one thing for sure is that: there have been a server-side programming language, maybe it is PHP... Ruby (❤️), Python... whatever.

That server-side language runs on a **Server**, and that language is responsible for taking care of my request and give me back what I asked for.

### 1.1.3 Is Node just JavaScript ?
**Node** is one of those server-side languages. You'll soon tell me: "Oh, isn't it just JavaScript ? 🤓".
The answer is "Yes and No". 

Traditionally, JavaScript runs only on a Web browser. But in 2009, **Node** took V8, which is the **Google Chrome**’s JavaScript engine, and used it to run **JavaScript** on servers.

#### 1.1.4 What differentiates Node and JavaScript ?
The simple word is **API**s, **Node** and **JavaScript** are almost the same but we need to remember that:
##### JavaScript runs on a Web browser
- No access to file system ❌
- Cannot run bash commands ❌

##### Node runs on the Server (the computer itself)
- No access to the DOM (window, document…etc…) ❌
- Can run bash commands ✅
- Has access to file system ✅

## 1.2 Why use Node ?
- The usage of **V8 JavaScript** Engine makes **Node** performant language
- It encourages **asynchronous**, which makes **concurrency management** easier because we don’t have to use **multithreads** 
- **Less to learn, less to do**: using **JavaScript** on the **front-end** and **Node** on the **back-end** will make our cerebral working memory  lighter because it’s the same **Core language**

## 1.3 Installation
The goal here is to make sure that you can run those two commands
```bash
node --version # mine shows: v14.17.5
npm --version  # mine shows: 6.14.14
```
Installation instructions are [here](https://nodejs.org/en/download/)

## 1.3 Our first Node server
Create a new file called `server.js` , then open your code editor and copy and paste-in the following code snippet
```javascript
const http = require('http')
 const server = http.createServer((req, res) => { 
  console.log(req.url) 
  res.end('Hello World')
})

server.listen(3000) 
```

Everything is done, make sure you did that little `control + S` 😀 then open your terminal and hit:
```bash
# Start the server
node server.js
```
You see the magic? 🪄
Not yet I guess… 😅

Go to your web browser and enter this URL http://localhost:3000/


### 1.3.1 Code explanation
```javascript
const http = require('http')
```

The `require` **function** is a built-in **Node** package which lets us grab various other built-in or custom files and libraries.

The `http`  **package** (or **library**) is **required**(or **imported**) and assigned to a variable called **http**(we could have called it **bunny** if we wanted 😄), this is kind of a convention to give it the variable the same name as the **package** or **module** or **library** (these three words mean the same thing) we import.

So what does `http` allows us to do ?
`http` provides us tools to work on the server, for example: 
- Creating the server
- Starting the server
- Listening to a specific port

```javascript
const server = http.createServer((req, res) => { 
  console.log(req.url) 
  res.end('Hello World')
})
```
Here, we create a server with the `http`’s function `createServer`. The `createServer` function takes a function as a parameter.

The function we provided to `createServer` is called a **callback**. A **callback** is simply a function that we be **called** by another function.

`createServer` will call that function and pass-in two parameters `req` and `res`, one stands for **request** and the other for **response**, those will be very helpful. 
For the moment, let’s just use `res` and **answer** the request.

Now, if we refresh our **web browser** and refresh, then go back to our **terminal** we can see that is **logged** “/“. This is the requested url.
Now, visit http://localhost:3000/bresiloupas, and go back to the **terminal**: we see “/bresiloupas” 🇧🇷. And this is the cycle of… not **Life** but the **Request and Respond Cycle** 🌎

### 1.3.1 More on Request and Response
Open our `server.js` file again and copy/paste the following code snippet:
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("The about page")
  } else if (req.url === "/contact") {
    res.end("The contact page")
  } else if (req.url === "/") {
    res.end("The home page")
  } else {
    res.writeHead(404)
    res.end("page not found")
  }
})

server.listen(3000) 
```
We can now restart the server by going to the terminal:
- hit **CTRL + C** to kill the **node** process
- type `node server.js` and here we go again!

Using an *if-else*statement in the callback function, we check for the request url and depending on its path, we response with different messages. If the url contains ‘ /about ’ , we serve the *about*page. If it contains ‘ /contact ’ , we serve the *contact*page and if it ’ s just ‘ / ’ , we serve the *home*page. If the path does not exist in the *if-else*, we default to the last *else*clause and respond with ‘ page not found ’ and also `writeHead(404)`. 

`writeHead` writes the status code of the request. Normally, a status code of `200` indicates that the server responded with a successful response. 

