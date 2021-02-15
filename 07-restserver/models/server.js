const express = require('express');
const cors = require('cors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares (funciones que añaden otra funcionalidad al server)
        this.middlewares();
        //Rutas de la app
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use('/api/usuarios', require('../routes/user'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });

    }

}


module.exports = Server;