const express = require('express');
const app = express()
const PORT = parseInt(process.argv[2]) || 8080

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// app.get('/', (req, res) => {
//     res.send(`Bienvenido, Servidor escuchando puerto: ${PORT}, proceso: ${process.pid}`)
// })
app.get('/api/randoms', (req, res) => {
    res.send(`Bienvenido, Servidor escuchando puerto: ${PORT}, proceso: ${process.pid}`)

})

app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto: ${PORT}, proceso: ${process.pid}`)
})