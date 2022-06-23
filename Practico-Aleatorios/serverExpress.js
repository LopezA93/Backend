const express = require("express");
const app = express();
const port = 3000;

/* SALUDO*/
app.get("/", (req, res) => {
    const saludo = `<h1 style="color:blue">Bienvenidos al servidos express</h1>`
    res.send(saludo)
})

/*VISITAS*/

app.get("/visitas", (req, res)=> {
    
    if (req){
        let count
        count ++;
        res.send(`la cantidad de visitas es ${count}`)
    } 
    
})

/*Fecha*/
app.get("/fyh", (req, res) => {
    const fecha = new Date().toString();
    res.send(fecha)
})

app.listen(port, () => {
    console.log("server express ON")
});

app.on("error", error => console.log("Hay error +", error))