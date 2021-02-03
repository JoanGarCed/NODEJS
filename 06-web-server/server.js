var express = require('express');
var app = express();

app.use( express.static( __dirname + '/public') );

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    
    res.render('home',{
        nombre: 'Joan',
        anio: new Date().getFullYear()
    });

});

app.listen(3000, () => {
    console.log('Escuchando el peticiones en el puerto 3000')
});