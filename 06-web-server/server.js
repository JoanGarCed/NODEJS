var express = require('express');
var app = express();

app.get('/', function (req, res) {
    
    let salida = {
        nombre: 'Joan',
        edad: 29,
        url: req.url
    }

    res.send(salida);

});

app.get('/data', function (req, res) {
    
    res.send('Hola Data');

});


app.listen(3000, () => {
    console.log('Escuchando el peticiones en el puerto 3000')
});