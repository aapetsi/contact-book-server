const express = require('express')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema/schema')

const app = express()

// Cors middleware
app.use(cors())

mongoose
  .connect('mongodb://localhost:27017/contacts', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(4000, () => console.log(`Server running on port 4000`))
