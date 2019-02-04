const express = require('express')

const app = express()
const hbs = require('hbs');
const port = process.env.PORT || 3000
require('./hbs/helpers')
app.use(express.static(__dirname + '/public')) // Poniendo el directorio por defecto

//Cambiando motor de plantilla a HBS
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')



//URL principal
app.get('/', (req, res) => {
    res.render('home', {
        nombre:'cHristian',
        anio: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    })
})

app.listen(port, ()=>console.log(`Escuchando el puerto ${port}`))
