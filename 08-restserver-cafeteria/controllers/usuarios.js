const { response, request } = require('express');
const Usuario = require('../models/usuario');

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
    
    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        msg: 'post API - Controlador',
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