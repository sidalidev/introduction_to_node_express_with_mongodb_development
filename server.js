const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/test")

const Kitten = mongoose.model("Kitten", { name: String })

// Create
app.post("/kittens", (req, res) => {
  const kittenToSave = new Kitten(req.body)
  kittenToSave.save().then((kitten) => res.json(kitten))
})

// Read All
app.get("/kittens", async (req, res) => {
  Kitten.find()
    .then((kittens) => res.json(kittens))
    .catch(() => res.status(404).end())
})

// Read one by ID
app.get("/kittens/:id", async (req, res) => {
  Kitten.findById(req.params.id)
    .then((kitten) => res.json(kitten))
    .catch(() => res.status(404).end())
})

// Update one by ID
app.put("/kittens/:id", async (req, res) => {
  Kitten.findByIdAndUpdate(req.params.id, req.body)
    .then((kitten) => res.json(kitten))
    .catch(() => res.status(404).end())
})

// Delete one by ID
app.delete("/kittens/:id", async (req, res) => {
  Kitten.findOneAndDelete(req.params.id)
    .then((kitten) => res.json(kitten))
    .catch(() => res.status(404).end())
})

app.get("*", (req, res) => {
  res.status(404).end()
})

app.listen(3000)
