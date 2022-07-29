const express = require("express");
const { Server } = require("http");
const app = express();
const port = 3000;

/* SALUDO*/
// app.get("/", (req, res) => {
//     const saludo = `<h1 style="color:blue">Bienvenidos al servidos express</h1>`
//     res.send(saludo)
// })

/*VISITAS*/

// app.get("/visitas", (req, res)=> {
    
//     if (req){
//         let count= 
//         count ++;
//         res.send(`la cantidad de visitas es ${count}`)
//     } 
    
// })

// /*Fecha*/
// app.get("/fyh", (req, res) => {
//     const fecha = new Date().toString();
//     res.send(fecha)
// })

app.listen(port, () => {
    console.log("server express ON")
});



 
// Metodos CRUD //

app.get('/api/mensaje', (req, res)=> {
    console.log('servidor get online')
    console.log(req.query)
    res.json({msj: 'hola'})

})

const frase = 'Hola mundo, como estan?'

//Routes
app.get('/api/frase', (req, res) => {
    res.json({frase: frase})
});

app.get('/api/letras/:num', (req, res) => {
    
    const numero = req.params.num
    if (isNaN(numero)){
        res.json({error: 'error el parametro no es un numero'});
        return
    }  
    if (numero < 1 || numero > frase.length) {
        res.json({error: 'Error numero fuera de rango'});
        return

    };
    const letra = frase [parseInt(numero) -1];
    res.json({letra: letra})
    console.log(letra)
})
app.get('/api/palabras/:num', (req, res) => {
    
    const numero = req.params.num
    const fraseDividida = frase.split(' ');
    const palabra = fraseDividida[parseInt(numero)-1]
    if (isNaN(numero)){
        res.json({error: 'error el parametro no es un numero'});
        return

    }  
    if (numero < 1 || numero > fraseDividida.length) {
        res.json({error: 'Error numero fuera de rango'});
        return

    };
    
    res.json({palabra: palabra})
    console.log(palabra)
})


// server.on('error', error => console.log('error:', error))
app.on("error", error => console.log("Hay error +", error))