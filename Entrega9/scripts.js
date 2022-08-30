show databases
//Creo DB
use ecommerce
//Creo Colecciones
db.createCollection("productos")
db.createCollection("mensajes")
//Introduzco Prods
db.productos.insertMany(
    [
        {
            "nombre": "Cerveza 1",
            "descripcion": "Rica",
            "codigo": 1234123541,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 460,
            "stock": 3,
            "timestamp": 1660783106545
        },
        {
        
            "nombre": "Gin",
            "descripcion": "Fuerte",
            "codigo": 12341235211241,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 2500,
            "stock": 30,
            "timestamp": 1660783106545
        },
        {
            
            "nombre": "Fernet",
            "descripcion": "Branca",
            "codigo": 123412352111212240,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 1500,
            "stock": 3,
            "timestamp": 1660783106545
        },
        {
            "nombre": "Vino blanco",
            "descripcion": "Blanco",
            "codigo": 1234123521121212200,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 2500,
            "stock": 3,
            
            "timestamp": 1660783106545
        },
        {
            "nombre": "Vino tinto",
            "descripcion": "Tinto",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 3500,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Cerveza Negra",
            "descripcion": "Negra",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 500,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Vino Rosado",
            "descripcion": "Rosado",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 1500,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Champagne Mum",
            "descripcion": "champeta",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 2000,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Whiskey",
            "descripcion": "super fuerte",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 3500,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Campari",
            "descripcion": "con naranja",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 1000,
            "stock": 3,
            
            "timestamp": 1660783187793
        }
    ]
);
//Muestro todos los prods
db.productos.find({})

//Muestro la cantidad de Docs
db.productos.count()

//Agrego un prod
db.productos.insertOne({
     "nombre": "Gin Bombay",
            "descripcion": "Fuerte",
            "codigo": 12341235211241,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 5000,
            "stock": 30,
            "timestamp": 1660783106545
})

//Listado prods menor a $1000
db.productos.find({precio:{$lt: 1000}})

// Listado prods entre a $1000 a $3000
db.productos.find({precio:{$gt:1000, $lt:3000}})

// Listado prods mayor a $3000
db.productos.find({precio:{$gt:3000}})
// Nombre del tercer prod mas barato
db.productos.find().limit(1).sort({precio:1})