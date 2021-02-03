const axios = require('axios');

class Busquedas {

    historial = [];

    constructor() {
        //TODO: leer DB si existe
    }

    async ciudad(lugar = '') {
        try{

            //petición http
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp);

            return []; // retornar los lugares que coincidad con el lugar que se mandó como parámetro
            
        }catch(err){

            return [];

        }
        

    } 

}

module.exports = Busquedas;