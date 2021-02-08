const express = require('express');
const hbs = require('hbs');
const app = express();
const puerto = 3000;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Joan García',
        titulo: 'Curso de Node'
    });
});

app.get('/generics', (req, res) => {
    res.render('generic', {
        nombre: 'Joan García',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Joan García',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});
    

app.listen(puerto, () => {
    console.log(`Aplicación corriendo en http://localhost:${puerto}`);
});
