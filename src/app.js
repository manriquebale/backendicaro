const express = require('express') //requerir express
const app = express() //instanciar una app de express
const PORT = 3000

const author = require('../models').authors;
const book = require('../models').books;
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hola chicos!')
})

app.get('/api/authors/:id', (req, res) => {
    return author.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(author => res.status(200).send(author))
    .catch(error => res.status(400).send(error))
})


app.get('/api/authors', (req, res) => {
    return author.findAll({
    })
    .then(author => res.status(200).send(author))
    .catch(error => res.status(400).send(error))
})

app.post('/api/authors', (req, res) => {
   return author.create({
        name: req.body.nombre,
        lastname: req.body.lastname,
        age: req.body.age
   })
    .then(author => res.status(200).send(author))
    .catch(error => res.status(400).send(error))
})

app.delete('/api/authors/:id', (req, res) => {
    return author.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(author => res.status(200).send('Se ha eliminado correctamente'))
    .catch(error => res.status(400).send(error))
})

app.put('/api/authors/:id', (req, res) => {
    return author.update({ age: req.body.age, name: req.body.name},{
        where: {
            id: req.params.id
        }
    })
    .then(author => res.status(200).send(author))
    .catch(error => res.status(400).send(error))
})




app.listen(PORT, () => console.log('escuchando en el puerto', PORT))
