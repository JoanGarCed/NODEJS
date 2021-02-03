const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {

    const busquedas = new Busquedas();
    let opt;


    do{
        // Imprimir el menú
        opt = await inquirerMenu();
        
        switch (opt) {
            
            case "1":
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                console.log(lugar);

                // Buscar los lugares

                // Seleccionar el lugar

                // Clima

                // Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Lat', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Maxima: ',);
                console.log('Minima: ', );
            break;
        }
    
    }while(opt !== '0');

}

main();