const { inquirerMenu } = require('./helpers/inquirer');
require('colors');


console.clear();

const main = async() => {
    
    console.log('Hola Mundo');

    let opt = '';

    do{
        
     opt = await inquirerMenu();
     console.log({opt});


    }while(opt !== '0');
    

    //pausa();
}

main();