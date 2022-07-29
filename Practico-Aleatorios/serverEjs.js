const express = require('express');
const app = express();
const PORT = 8080;


app.set('view engine', 'ejs');


app.get('/datos', (req, res) => {
    const { nivel, min, max } = req.query
    res.render('./pages/index.ejs', {
        titulo: '  MEDIDOR',
        nivel: nivel,
        min: min,
        max: max
    })
})

app.listen(PORT, () => {
    console.log('Puerto 8080 online')
})