const express = require('express') //requerir express
const app = express() //instanciar una app de express
const path = require('path')
const PORT = 3000
app.use(express.static('public'))
app.use('/prefijo', express.static('publica'))

//Registrar ejs como motor de plantillas
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.send('Hola chicos!')
})

app.get('/index', (req, res) => {
    res.render('index')
    // res.render('../src/views/index.ejs')

})



app.listen(PORT, () => console.log('escuchando en el puerto', PORT))
