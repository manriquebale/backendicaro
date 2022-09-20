const express = require('express') //requerir express
const app = express() //instanciar una app de express
const PORT = 3000

const author = require('../models').authors;
const book = require('../models').books;
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hola chicos!')
})

app.listen(PORT, () => console.log('escuchando en el puerto', PORT))
