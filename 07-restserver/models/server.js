const express = require('express');

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

        //Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get API'
            });
        });

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });

    }

}


module.exports = Server;