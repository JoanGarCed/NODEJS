const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
require('colors');

const main = async() => {
    
    console.log('Hola Mundo');
    let opt = '';
    const tareas = new Tareas();

    do{
        
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                    // crear opcion
                    const desc = await leerInput('Descripción: ');
                    tareas.crearTarea(desc);
            break;

            case '2':
                 console.log(tareas._listado);
            break;
        }  

        await pausa();


    }while(opt !== '0');
    

    //pausa();
}

main();