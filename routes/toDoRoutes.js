const {Todo} = require('../models')

module.exports = app =>{

        // get all list items
    app.get('/lists', (req, res) => {
        Todo.findAll()
        .then(tasks => {
            res.json(tasks)
        .catch(e => console.log(e))})
    })
    // add a task item
    app.post('/lists', (req, res) =>{
        Todo.create(req.body)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(e => console.log(e))
    })
    // update a task item
    app.put('lists/:id', (req, res) => {
        Todo.findOne({where: {id: parseInt(req.params.id)} })
            .then(task => task.update(req.body))
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    // remove a task item
    app.delete('lists/:id', (req, res) => {
        Todo.findOne({where: {id: parseInt(req.params.id)} })
            .then(task => task.destroy(req.body))
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e)) 
    })
    
}