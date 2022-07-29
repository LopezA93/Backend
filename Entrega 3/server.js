const express = require("express");
const app = express();
const fs = require("fs")
const port = 3001;
const Contenedor = require("../Entrega 2/Archivos.js")


/* Contenedor*/
const archivo = new Contenedor ("../Entrega 2/productos2.txt");
const getProductos= archivo.getAll();


/*Routes*/
app.get("/",  async (req, res) => {
    const resultado= await getProductos
    res.send(resultado)

})


app.get("/productoRandom", async (req, res) => {
    const resultado = await getProductos;
    const aleatorio= resultado[Math.floor(Math.random() * resultado.length)];
    res.send(aleatorio) 
})


app.listen(port, () => {
    console.log(`Servidor ${port} Online`);
    
})