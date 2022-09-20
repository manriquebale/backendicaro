const express = require('express') //requerir express
const app = express() //instanciar una app de express
const path = require('path')
const PORT = 3000

app.use(express.static('public'))
app.use('/prefijo', express.static('publica'))

app.get('/', (req, res) => {
    res.send('Hola chicos!')
})


app.listen(PORT, () => console.log('escuchando en el puerto', PORT))
