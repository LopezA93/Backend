const express = require("express");
const { Router } = express;
const Contenedor = require("../utils/Contenedor");
const db = "./routes/productos.json";


const contenedor = new Contenedor(db);


const routerProductos = new Router();

routerProductos.use(express.json());
routerProductos.use(express.urlencoded({extended:true}));


/*Routes*/
routerProductos.get("/",  async (req, res) => {
    const getProductos= contenedor.getAll();
    const resultado= await getProductos
    res.json(resultado)

})



routerProductos.get('/:id', async (req, res) => {
    const id = req.params.id
    const filtrarProducto= contenedor.getById(id);
    const resultado = await filtrarProducto
    
    if(!resultado) {
        res.json({message: 'No se encuentra producto con esta id'})
    } else {
        res.json(resultado)
    }
    
});


routerProductos.post('/', async (req, res) => {
    
    const item = req.body;
    const productoAgregado= contenedor.save(item)
    const resultado = await productoAgregado
    res.json(resultado);
})



routerProductos.put("/:id", async (req, res) => {
    const id = req.params.id;
    const item = req.body;
    const dataUp = await contenedor.update(item, id);
    res.send(dataUp);
  });

routerProductos.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const productoEliminado = contenedor.deletByID(id);
    res.json(productoEliminado)

})

module.exports = routerProductos