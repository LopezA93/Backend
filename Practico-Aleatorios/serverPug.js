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