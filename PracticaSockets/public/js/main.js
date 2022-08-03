
const socket = io();


socket.on('connect', () => {
    console.log('conectado al servidor')
}
)
socket.on('new_message', (msg) => {
    agregarMasajes(msg)


})


const agregarMasajes = (msg) => {
    const box = document.getElementById('post').innerHTML += `
    <div class='card'>
        <b>${msg.nombre}</b>: ${msg.mensaje}

    </div>
    
    `


}


const enviarMensaje = () => {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    
    socket.emit('chat_message', { nombre, mensaje })


}