const express = require('express');
const {Router} = express;
const multer = require('multer')
const app = express();

const personas = [];
const mascotas = [];

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use( express.static('public'))

const routerPersonas= Router();
const routerMascotas = Router();


//Router personas

routerPersonas.get('/', (req,res) => {
    res.json(personas)

})
routerPersonas.post('/', (req, res) => {
    // const {nombre, apellido, edad} = req.body;
    const user = req.body;
    personas.push(user)
    res.json(user);

})
//Router masctoas
routerMascotas.use((req, res, next) => {
    console.log('peticion mascota');
    next()
})
routerMascotas.get('/', (req,res) => {
    res.json(mascotas)

})
routerMascotas.post('/', (req, res) => {
    // const {nombre, apellido, edad} = req.body;
    const mascota = req.body;
    mascotas.push(mascota)
    res.json(mascota);
})

app.use('/personas', routerPersonas);
app.use('/mascotas', routerMascotas);



// Middleware a nivel aplicacion 
app.use((req, res, next) => {
    const time = Date.now().toLocaleString();
    console.log('peticion' +time.toLocaleString())
    next()
})

// multer subiendo archivos 
app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html")
})
let storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + "-" + file.originalname);
    }
})
let upload = multer({storage: storage})
app.post('/uploadfile', upload.single('myFile'), (req, res, next) =>{

    const file = req.file
    if(!file){
        const err = new Error('Por favor envie archivo');
        // error.httpStatusCode = 400;
        return next (err)
    }
    res.send(file)
})


app.listen(3000, ()=> {
    console.log('Puerto abierto 3000')
})
