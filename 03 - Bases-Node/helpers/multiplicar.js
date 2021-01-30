const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 5) => {

//     return new Promise((res, rej) => {
//         console.log('======================');
//         console.log(`Tabla del: ${base}`);
//         console.log('======================');
    
//         let salida = '';
    
//         for(let i = 1; i <= 10; i++){
//             salida += `${base} x ${i} = ${(base * i)}\n`;
//         }
    
//         console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//         res(`tabla-${base}.txt creado`); 
//     });
    
// }

const crearArchivo = async(base = 5, listar = false, hasta) => {

    try{
        if(listar){
            console.log('======================'.green);
            console.log('Tabla del:'.green,colors.blue(base));
            console.log('======================'.green);
        }
        
    
        let salida = '';
        let consola = '';
    
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${(base * i)}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${(base * i)}\n`;
        }

        if(listar){
            console.log(consola);
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt creado`;  
    }catch(err){
        throw err;
    }
        
}

module.exports = {
    crearArchivo
}
