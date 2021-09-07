const path = require('path')
const express = require("express")
const app = express() // starts a new Express app


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + '/pages','home.html'))
})

app.listen(3000, () => {
  console.log("App listening on port 3000")
})
