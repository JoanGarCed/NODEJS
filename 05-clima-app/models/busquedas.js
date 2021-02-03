const axios = require('axios');

class Busquedas {

    historial = [];

    constructor() {
        //TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token' : process.env.MAPBOX_KEY,
            'limit' : 5,
            'lenguage' : 'es'
        }
    }

    async ciudad(lugar = '') {
        try{
            //petición http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            // const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

        }catch(err){

            return [];

        }
        

    } 

}

module.exports = Busquedas;