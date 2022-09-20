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

    const usuario =  [
        {
            nombre: 'ale',
            apellido: 'manrique'
        },
        {
            nombre: 'agus',
            apellido: 'mperez'
        },
        {
            nombre: 'marioa',
            apellido: 'lopez'
        }


    ] 

    res.render('index', { usuario})
    // res.render('../src/views/index.ejs')

})



app.listen(PORT, () => console.log('escuchando en el puerto', PORT))
