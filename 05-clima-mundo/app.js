


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    } 
}).argv;



const encodedUrl = encodeURI(argv.direccion);
console.log(encodedUrl);

var instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
    headers: {'x-rapidapi-key' : '6875732579msh7bd440066bbfc8cp16f4e1jsndef708bf5aae'}
});

instance.get()
        .then( resp => {
            console.log(resp.data);
        })
        .catch( err => {
            console.log('ERROR!!!', err);
        });