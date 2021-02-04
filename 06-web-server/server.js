const express = require('express');
const app = express();
const puerto = 3000;

//Servir contenido estatico
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
});
    
app.get('*', (req, res) => {
    res.send('404  | Page not found');
});
    

app.listen(puerto, () => {
    console.log(`Aplicación corriendo en http://localhost:${puerto}`);
});
