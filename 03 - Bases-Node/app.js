//Imprimir la tabla de multiplicar 
// 5 x 1 = 5
//..
// 5 x 10 = 50

console.clear();
console.log('======================');
console.log('Tabla del: 5');
console.log('======================');

const cinco = 5;
let salida = '';

for(let i = 1; i <= 10; i++){
    salida += `${cinco} x ${i} = ${(cinco * i)} `;
}

console.log(salida);