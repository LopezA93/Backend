const express = require('express');
const ejs = require('ejs')
const {Server: HttpServer} = require('http');
const {Server: SocketServer} = require("socket.io");
const app = express()
const httpServer = new HttpServer(app);
const socketServer= new SocketServer(httpServer)

const mensajes= []
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/public/index.html")

})

socketServer.on('connection', (socket) => {
    console.log('User conectado');
    socket.emit('chat_message', mensajes)
    socket.on('chat_message', (msg) => {
         mensajes.push(msg)
        console.log('mensaje', msg)
        // socketServer.sockets.emit(`nuevo mensaje: ${msg}`)
        socketServer.sockets.emit('new_message',msg )
    })
    

})

const PORT = 8080

httpServer.listen(PORT, () => {
    console.log(`Server On Puerto ${PORT}`)
})