const argv = require('yargs')
    .option('', {
        alias: '',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 1,
        describe: 'Es hasta que número vamos a multiplicar'
    })
    .check((argv, options) => {
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número';
            }else{
                return true;
            }
    }) 
    .argv;
