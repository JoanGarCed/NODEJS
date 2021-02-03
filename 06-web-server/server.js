var express = require('express');
var app = express();

app.use( express.static( __dirname + '/public') );

// app.get('/', function (req, res) {
    
//     let salida = {
//         nombre: 'Joan',
//         edad: 29,
//         url: req.url
//     }

//     res.send(salida);

// });

app.listen(3000, () => {
    console.log('Escuchando el peticiones en el puerto 3000')
});