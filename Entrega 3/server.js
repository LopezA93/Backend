const express = require("express");
const app = express();
const fs = require("fs")
const port = 3001;

/*Class*/ 
class Contenedor {

    constructor(url) {
        this.url = url
    }

    /*Metodos*/
    async productos ()  {
        try {
            const items = await fs.promises.readFile(this.url, "utf-8");
            const datos = JSON.parse(items);
            return datos
        } catch (error) {
            console.log(error)
        }
    }
}

let archivo = new Contenedor ("./productos.txt");
const getProductos= archivo.productos();

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