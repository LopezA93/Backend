const http = require("http");
const server = http.createServer((req, res)=> {
    const fecha = new Date().getHours()
    const date = fecha.toString()
    
    const hora = () => {
    if ((date >= 6 ) && (date <=12)) {
          const dias= "buenos dias";
          return dias
    } else if ((date <= 13 ) && (date >= 19)) {
         const tardes= "buenas tardes"
         return tardes;
    } else {
         const noches = "buenas noches";
         return noches;
    }}
    
    res.end(hora());

})

const connectedServer = server.listen(3001, ()=> {
    console.log("server online 3001")
})