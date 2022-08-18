const express = require('express');

const app = express();
const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'pug')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('hello', {
        title: "Titulo Pug",
        mensaje: "Mensaje de pug"
    })
})

// Desafio N1 
app.get('/datos', (req, res) => {
    const { nivel, min, max } = req.query
    res.render('desafio1', {
        titulo: '  MEDIDOR',
        nivel: nivel,
        min: min,
        max: max
    })
})

app.listen(PORT, () => {
    console.log('Puerto 8080 online')
})
// [
//     {
//         "productos": [
//             {"id": 1,
//             "nombre": "Cerveza Corona",
//             "descripcion": "Rica",
//             "codigo": 1234123541,
//             "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
//             "precio": 1234,
//             "stock": 3,
//             "timestamp": 1660443884541},
//             {"id": 2,
//             "nombre": "fernet Branca",
//             "descripcion": "Rica",
//             "codigo": 1234123541,
//             "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
//             "precio": 1234,
//             "stock": 3,
//             "timestamp": 1660443884541}
//         ],
//         "id": 1,
//         "timestamp": 1660443884541
//     },
//     {
//         "productos": [
//             {"id": 1,
//             "nombre": "Gin",
//             "descripcion": "Rica",
//             "codigo": 1234123541,
//             "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
//             "precio": 1234,
//             "stock": 3,
//             "timestamp": 1660443884541},
//             {"id": 2,
//             "nombre": "Vino",
//             "descripcion": "Rica",
//             "codigo": 1234123541,
//             "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
//             "precio": 1234,
//             "stock": 3,
//             "timestamp": 1660443884541}
//         ],
//         "id": 2,
//         "timestamp": 1660443884541
//     },

//     {
//         "productos": [
//             {"id": 1,
//             "nombre": "Cerveza",
//             "descripcion": "Rica",
//             "codigo": 1234123541,
//             "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
//             "precio": 1234,
//             "stock": 3,
//             "timestamp": 1660443884541},
//             {"id": 2,
//             "nombre": "fernet",
//             "descripcion": "Rica",
//             "codigo": 1234123541,
//             "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
//             "precio": 1234,
//             "stock": 3,
//             "timestamp": 1660443884541}
//         ],
//         "id": 3,
//         "timestamp": 1660443884541
//     }
// ]