const sequelize = require('../config')
const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize, Model, DataTypes) => {
  class Todo extends Model { }

  Todo.init({
    item: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {sequelize, modelName: 'todo'})
  return Todo
}
  // Sample key value pairs
  // Movie: require('./Movies.js'),
  // Actor: require('./Actors.js')(sequelize, Model, DataTypes)