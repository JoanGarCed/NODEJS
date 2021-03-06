const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const usuariosGet = (req = request, res = response) => {

    const body = req.body;
    
    res.json({
        msg: 'get API - Controlador',
        body
    });

}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;
    
    res.json({
        msg: 'put API - Controlador',
        id
    });

}

const usuariosPost = async(req, res = response) => {

    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if( existeEmail){
        return res.status(400).json({
            msg: 'Ese correo ya está registrado'
        });
    }

    // Encriptar la contrasea
    const salt= bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });

}

const usuariosDelete = (req, res = response) => {
    
    res.json({
        msg: 'delete API - Controlador' 
    });

}

const usuariosPatch = (req, res = response) => {
    
    res.json({
        msg: 'patch API - Controlador' 
    });

}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}