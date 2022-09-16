const express = require('express');
const app = express();
const { Server: HTTPserver, get } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HTTPserver(app);
const socketServer = new IOServer(httpServer)
const PORT = 8080
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const productos= require('./routes/productos')

const {save, verMsj} = require("./controllers/mensajes")
app.use('/productos', productos)
  

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html")
})

socketServer.on('connection', async (socket) => {
    console.log('conectado al servidor')
    socket.on("chat_message", (msj)=> {
        save(msj)
    });
    const getAll= await verMsj()
   
    socketServer.sockets.emit('MENSAJES_EXISTENTES', getAll)


})


httpServer.listen(PORT, () => {
    console.log(`Servidor online puerto ${PORT}`)
})