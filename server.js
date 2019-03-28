const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


//Hace público un directorio
app.use(express.static(__dirname + '/public'));


//Express HBS Engine: esto seria el front-end, aquí empiesariamos a usar Angular
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', { nombre: 'German' });
});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => { console.log(`Escuchando peticiones en el puerto ${port}`) });