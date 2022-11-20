const express = require("express");
const { Router } = express;
const logger = require("./loggerConfig");
const compression = require("compression");
const zip = compression();
const zipRoute = new Router();

zipRoute.get('/infogzip', zip, (req, res) => {
    logger.log('info', 'Ruta exitosa');

    res.send({   'directorio': process.cwd(),
    'id proceso': process.pid,
    'version node': process.version,
    'titulo': process.title,
    'sistema operativo': process.platform,
    'uso memoria': process.memoryUsage()}
    )
})
zipRoute.get('/info', (req, res) => {
    logger.log('info', 'Ruta exitosa');

    res.send({   'directorio': process.cwd(),
    'id proceso': process.pid,
    'version node': process.version,
    'titulo': process.title,
    'sistema operativo': process.platform,
    'uso memoria': process.memoryUsage()}
    )
})
module.exports = zipRoute;
