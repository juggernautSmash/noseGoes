const express = require('express')
const { join } = require('path')
const app = express()

// Middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes')(app)

// Database
const db = require('./config')
db.sync() // syncronize app wit mysqlDb
  .then( () => app.listen(process.env.PORT || 3000)) // start server when it is connected to the database
  .catch( e => console.log(e) ) // Log errors

