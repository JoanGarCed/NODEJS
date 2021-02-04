var express = require('express');
var app = express();
const hbs =require('hbs');

app.use( express.static( __dirname + '/public') );

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    
    let palabras = texto.split(' ');

    palabras.forEach( (palabra, i ) => {
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});


app.get('/', function (req, res) {
    
    res.render('home',{
        nombre: 'Joan'
    });

});

app.get('/about', function (req, res) {
    
    res.render('about',{

    });

});

app.listen(3000, () => {
    console.log('Escuchando el peticiones en el puerto 3000')
});