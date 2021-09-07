const path = require('path')
const express = require("express")
const app = express() // starts a new Express app

const pagesDirectory = `${__dirname}/pages` // equivalent to __dirname + '/pages'

// GET /
app.get("/", (req, res) => {
  res.sendFile(path.resolve(pagesDirectory,'home.html'))
})

// GET /about
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(pagesDirectory,'about.html'))
})


// GET /adlsfalsdfjk
app.get("*", (req, res) => {
  res.sendFile(path.resolve(pagesDirectory,'404.html'))
})

app.listen(3000, () => {
  console.log("App listening on port 3000")
})
