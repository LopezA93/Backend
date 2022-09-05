const express = require ("express")
const app = express()
const connection = require ('./database')
connection()
const PORT = 8080
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const prodRouter= require("./routes/productos")

app.use('/productos', prodRouter)



app.listen(PORT, ()=> {
    console.log("server on")
} )