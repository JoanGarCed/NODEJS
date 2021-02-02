const { inquirerMenu, pausa, leerInput, listadoTeareasBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        
        //Imprimir el menú
        opt = await inquirerMenu();

        switch(opt){
            case '1':
                    // crear opcion
                    const desc = await leerInput('Descripción: ');
                    tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
                //console.log(tareas.listadoArr);
            break;

            case '3': // listar completadas
               tareas.listarPendientesCompletadas(true);
            break;

            case '4': // listar pendientes
                tareas.listarPendientesCompletadas(false);
            break;

            case '6': // Borrar
                const id = await listadoTeareasBorrar(tareas.listadoArr);
                console.log({id});
            break;
        }  

        guardarDB(tareas.listadoArr);

        await pausa();


    }while(opt !== '0');
    
}

main();