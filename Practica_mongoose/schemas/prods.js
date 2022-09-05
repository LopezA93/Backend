const {Schema, model} = require('mongoose');


const prodSchema = new Schema({
    nombre: {type: String, required:true},
    descripcion:{type: String, required:true},
    foto:{type: String, required:true},
    precio: {type: Number, required:true},
    codigo: {type: Number, required:true},
    stock: {type: Number, required:true},
    
},{timestamps: true}) 

const productos = model('productos', prodSchema)

module.exports = {
    productos,
    prodSchema
}