# 3. Introduciton to MongoDB and Mongoose
We will use MongoDB as the backend database for our app. You can of course use other solutions to persist your application data e.g. in files, in a relational SQL database, or in another kind of storage mechanism. In this chapter, we will cover the popular MongoDB for database storage.

MongoDB is a NoSQL database. Before we talk about what is a NoSQL database, let ’ s first tall about relational databases so that we can provide a meaningful contrast. If you have not heard of a relational database before, you can think of relational databases like spreadsheets where data is structured and each entry is generally a row in a table. Relational databases are generally controlled with SQL or Structured Query Language. Examples of popular relational databases are MySQL, SQL Server and PostgreSQL.

NoSQL databases are often called non-relational databases, where NoSQL means anything that isn ’ t an SQL (see how it infers the popularity of SQL?). It might seem like NoSQL is a protest over SQL but it actually refers to a database not structured like a spreadsheet, i.e. less rigid than SQL databases.
So, why use Mongo? Firstly, it is popular and that means there is plenty of help online, Secondly, it is mature being around since 2007 and used by companies like eBay, Craigslist and Orange.

## Architecture of MongoDB
As mentioned, the architecture of MongoDB is a NoSQL database which stores information in the form of collections and documents. MongoDB stores one or more collections. A collection represents a single entity in our app, for example in an e-commerce app, we need entities like categories, users, products. Each of these entity will be a single collection in our database.

![](https://docs.mongodb.com/manual/images/crud-annotated-collection.bakedsvg.svg)

A collection then contain documents. A document is an instance of the entity containing the various relevant fields to represent the document. For example, a product document will contain name, image and price fields. Each field is a key-value pair. Documents look a lot like JSON objects with various properties (though they are technically Binary JSON or BSON). An example of a collection-document tree is shown below:

```
Database
    → Products collection
        → Product document {
        price: 26,
        title: "Learning Node",
        description: "Top Notch Development book", expiry date: 27-3-2020
        }
        → Product document
        ...

    → Users collection
        → User document {
        username: "123xyz", contact:
        {
        phone: "123-456-7890", email: "xyz@example.com"
        } }
        → User document ...
```

## Machine preparation
In order to connect to a our Database, we need to have one running in our machine. So, follow instruction here: [Install MongoDB Community Edition — MongoDB Manual](https://docs.mongodb.com/manual/administration/install-community/)

### For visualization
I use [Table Plus](https://tableplus.com/) on my **Mac**, but the is a good multi-platform **GUI** for visualizing your Mongo Database: [Compass](https://www.mongodb.com/try/download/compass)



## Mongoose
[Mongoose](https://mongoosejs.com/) provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

```bash
npm install mongoose
```


Then import **Mongoose**
```javascript
const mongoose = require("mongoose")
```


Do not forget to enable `JSON` parsing, this lets you access the `.body` of `req`:

In your code editor:
```javascript
app.use(express.json())
```

**bodyParser** will let **Express** parse `JSON` body of a request.

### Connect to our database
In your code editor:
```javascript
mongoose.connect("mongodb://localhost:27017/test")
```

### Mongoose Model
Lets create a model
	 - Called: **Kitten**
	 - Has these properties: 
		 - name
```javascript
const Kitten = mongoose.model("Kitten", { name: String })
```

Just for sake of testing, lets instantly create a new **kitten** called **Le chat**
```javascript
const kittenToSave = new Kitten({ name: "Le chat" })
kittenToSave.save().then((kitten) => res.json(kitten))
```


### The whole file should look like this
```javascript
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/test")

const Kitten = mongoose.model("Kitten", { name: String })
kittenToSave.save().then((kitten) => res.json(kitten))

// TO BE COMPLETED...
app.listen(3000)
```

#### The file completed
```javascript
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
```

