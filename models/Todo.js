module.exports = (sequelize, Models, DataTypes) => {
  class Todo extends Model { }

  Todo.init({
    item: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {sequelize, modelName: 'todo'})
  return Todo
}