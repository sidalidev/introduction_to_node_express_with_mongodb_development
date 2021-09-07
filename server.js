const express = require("express")
const app = express() // starts a new Express app

app.get("/", (req, res) => {
  res.json({
    name: "Louis croix-vé-bâton"
  })
})

app.listen(3000, () => {
  console.log("App listening on port 3000")
})
