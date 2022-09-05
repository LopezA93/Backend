const express = require('express');
const { Router } = express;
const { productos } = require('../schemas/prods')

const routerProductos = new Router;

routerProductos.get("/", async (req, res) => {
    const getAll = await productos.find()
    res.json(getAll)

})

routerProductos.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const getById = await productos.find({ _id: id })
        res.json(getById)
    } catch (error) {
        res.status(404).send(error)
    }

})
routerProductos.post('/', async (req, res) => {
    const body = new productos(req.body);
    const nvoItem = await productos.insertMany([body])
    res.json(nvoItem)

})
routerProductos.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const prod = await productos.findOne({_id:id})

        const nvoItem = new productos(req.body)
        
        
        const update = await productos.updateOne({ _id:id }, { $set:{nvoItem}});
        res.json(update)

    } catch (error) {
        res.status(400).send(error)
    }

})

routerProductos.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const delById = await productos.deleteOne({ _id: id })
        res.json(delById)
    } catch (error) {
        res.status(404).send(error)
    }

})
module.exports = routerProductos