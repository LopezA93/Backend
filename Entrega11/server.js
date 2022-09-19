const express = require('express')
const app = express()
const PORT = 8080;
const session = require('express-session')
const MongoStore = require('connect-mongo');
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }
app.use(session({
    //Base de datos Mongo
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://lopeza93:River2022@firstcloster.cxeka9h.mongodb.net/sessions?retryWrites=true&w=majority',
        mongoOptions,
        ttl: 600,
        retries: 0
    }),
    secret: "Secret",
    resave: false,
    saveUninitialized: true

}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs')


app.get("/login", (req, res) => {
    let nombre= req.session.nombre
    res.render('./pages/login', {
        nombre:nombre
    })
})




app.post('/login', (req, res) => {
    let nombre = req.body.nombre
    if (nombre) {
        req.session.nombre = nombre;
        res.render('./pages/login', {
            nombre:nombre
        })
    } else {
        res.redirect('/')
    }
    
    
})
app.get("/logout", (req, res) => {
    let nombre = req.session.nombre
    req.session.destroy(err => err ? 
        console.log(err)
        : 
        res.render('pages/logout', {
            nombre:nombre
        }) 

    );
    
}); 
app.listen(PORT, () => {
    console.log(`Servidor Online Puerto ${PORT}`)
}) 