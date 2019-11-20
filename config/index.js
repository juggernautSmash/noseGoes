require('dotenv').config()
const dbPass = process.env.dbPass

const Sequelize = require('sequelize')
module.exports = new Sequelize(`mysql://root:${dbPass}@localhost/todo_db`)