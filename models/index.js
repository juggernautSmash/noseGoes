const sequelize = require('../config')
const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize, Model, DataTypes) => {
  // Sample key value pairs
  // Movie: require('./Movies.js')(sequelize, Model, DataTypes),
  // Actor: require('./Actors.js')(sequelize, Model, DataTypes)
  Todo: require('./Todo.js')(sequelize, Model, DataTypes)
}