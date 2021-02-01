const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
require('colors');

const main = async() => {
    
    console.log('Hola Mundo');
    let opt = '';

    do{
        
     opt = await inquirerMenu();
     console.log({opt});

     await pausa();


    }while(opt !== '0');
    

    //pausa();
}

main();