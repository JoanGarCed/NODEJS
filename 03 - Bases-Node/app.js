const {crearArchivo} = require('./helpers/multiplicar');

//Imprimir la tabla de multiplicar 
// 5 x 1 = 5
//..
// 5 x 10 = 50

console.clear();

const base = 20;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
