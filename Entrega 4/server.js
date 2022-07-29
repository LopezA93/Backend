const express = require ('express');
const app = express();
const productosRouter = require ('./routes/productos')

app.use(express.static('public'))
app.use('/api/productos', productosRouter)


//ROUTER


//Server Online
const server = app.listen(3000, ()=> [
    console.log('Servidor online puerto 3000')
]);

server.on('error', error => console.log('error en servidor', error))