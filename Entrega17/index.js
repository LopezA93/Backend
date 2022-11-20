const express = require('express');
const app = express();
const PORT = 8080;
const zipRoute = require('./Routes/zip')

app.get('/', (req, res) => {
    logger.log('info', `Ruta ${req.url}`)
    res.send("Bienvenido a la Entrega 15");

});

app.get('/*', (req, res) => {
    logger.log("warn", `Ruta no encontrada ${req.url}`)
    res.status(400).send(`Ruta no encontrada ${req.url}`);
})

app.use('/zip', zipRoute)

app.listen(PORT, () => {
    console.log(`Bienvenido, servidor online puerto: ${PORT}`)
})