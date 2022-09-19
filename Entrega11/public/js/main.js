


const iniciarSesion = () => {
    const nombre = document.getElementById('nombre').value
    const div = document.getElementById('box').innerHTML += `
    <form action='/logout'>
        <div class='card'>
            <p> Bienvenido/a ${nombre} </p>
            <button class= "btn btn-secondary m-2" type='submit' >Desloguearse </button>
        </div>
    </form>`
    
    
};

const logout = (a) => {
    
    fetch(`http://localhost:8080/logout`)
        .then(res => {
            
            const div = document.getElementById('box').innerHTML += `
            <div class='card'>
                <p> Hasta Luego ${a} </p>
                
            </div>
            `
            window.location.replace(res.url);;
        })
        .then(post => {
            console.log(post.title);
        });
}

// socket.on('connection', (socket) => {
//     console.log('usuario conectado');

// })

// //////// CHAT /////////
// socket.on('new_message', (msg) => {
//     agregarMasajes(msg)


// });
// const authors = new normalizr.schema.Entity('authors');
// const mensajeSchema = new normalizr.schema.Entity('mensajes', { author: authors }, { idAttribute: 'id' })
// const file = [mensajeSchema]
// socket.on('MENSAJES_EXISTENTES', (a) => {
    
//     const desnormalizar = normalizr.denormalize(a.result, file, a.entities);
    
//     desnormalizar.forEach(element => {
//         console.log(element)
//         return agregarMasajes(element)
//     });
    

    
// })
// socket.on('porcentaje', (a,b) => {
//     compresion(a,b)
// })

// const enviarMensaje = () => {
    
//     const nombre = document.getElementById("nombre").value
//     const apellido = document.getElementById("apellido").value
//     const edad = document.getElementById("edad").value
//     const alias = document.getElementById("alias").value
//     const avatar = document.getElementById("avatar").value
//     const text = document.getElementById("mensaje").value
//     const correo= document.getElementById('correo').value
//     const mensaje = {
//         author: {
//             id:correo,
//             nombre: nombre,
//             apellido: apellido,
//             edad: edad,
//             alias: alias,
//             avatar: avatar
//         },
//         text: text
//     }

//     socket.emit('chat_message', mensaje)
// }


// const agregarMasajes = (msg) => {


//     const box = document.getElementById('post').innerHTML += `
//     <div class='card'>
//         <b style='color:blue'>${msg.author.alias}</b> <img src="${msg.author.avatar}">/> <p style='color:green; font-style: italic' >${msg.text}</p>

//     </div>
//     `


// }
// const compresion = (a,b) => {
//     let desnormalizar = normalizr.denormalize(a.result, file, a.entities);
//     let desnormalizarPeso = JSON.stringify(desnormalizar).length / 1024
//     let resultado = parseInt(b/desnormalizarPeso) 
    
    
//     console.log(resultado)
//     const div = document.getElementById('compresion').innerHTML += `
//     <div class='card'>
//         <p> La compresion es de ${resultado} %</p>

//     </div>
//     `

// }

