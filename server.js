const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/test")

const kittenSchema = new mongoose.Schema({ name: String, age: Number })
const humanSchema = new mongoose.Schema({
  name: String,
  kittens: [kittenSchema],
})

const Kitten = mongoose.model("Kitten", kittenSchema)
const Human = mongoose.model("Human", humanSchema)

// Subdoc example: https://mongoosejs.com/docs/subdocs.html
app.get("/humans", async (req, res) => {
  const human = new Human({
    name: "Sebastien Patoche",
    kittens: [
      {
        name: "Rengar",
        age: 99,
      },
    ],
  })

  human.save().then((kitten) => {
    Human.find().then((h) => res.json(h))
  })
})

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
  Kitten.findByIdAndDelete(req.params.id)
    .then((kitten) => res.json(kitten))
    .catch(() => res.status(404).end())
})

app.get("*", (req, res) => {
  res.status(404).end()
})

app.listen(3000)
