let items = []

Axios.get('/list')
  .then( ({data}) => {
    data.forEach( ({id, item, done})=> {
      // Generate the List
      let list = document.createElement('div')
      list.className = `row`
      list.id = `task${id}`
      list.innerHTML = `
      <td>${id}</td>
      <td>${item}</td>
      <td>${done}</td>
      <td>done</td>
      `
      document.getElementById('tasks').append(list)

    })
  })

  
const addItem = _ => {

  items.push({
    text: document.getElementById('task').value,
    isDone: false
  })
  console.log(items)
  renderItems()
}
const renderItems = _ => {

  document.getElementById('tasks').innerHTML = ''
  items.forEach((item, i) => {
    let itemElem = document.createElement('li')
    itemElem.innerHTML = `
    <span style="text-decoration: ${item.isDone ? 'line-through' : 'none'}">${item.text}</span>
    <button data-id="${i}" class="toggle">✓</button>
    <i class="tiny material-icons">delete_forever</i>

  `
    document.getElementById('tasks').append(itemElem)
  })
}
const updateItem = id => {
  items[id].isDone = !items[id].isDone
  renderItems()
}

document.addEventListener('click', event => event.target.className === 'toggle' ? updateItem(event.target.dataset.id) : null)
document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()
  addItem()
})

renderItems()