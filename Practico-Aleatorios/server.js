const http = require("http");
const server = http.createServer((req, res)=> {
    res.end("hola mundo");

})

const connectedServer = server.listen(3001, ()=> {
    console.log("server online 3001")
})