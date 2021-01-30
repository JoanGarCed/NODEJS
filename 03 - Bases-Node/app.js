const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;

//Imprimir la tabla de multiplicar 
// 5 x 1 = 5
//..
// 5 x 10 = 50

console.clear();

console.log(process.argv);
console.log(argv);


console.log('base: yargs', argv.base);

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

//const base = 20;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));
