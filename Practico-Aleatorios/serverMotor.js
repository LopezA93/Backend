const express = require("express");
const app = express();
const PORT = 3000;
const fs = require('fs')

app.engine('cte', (filePath, options, callback) => {

});

app.settings('views', './views')
app.set('view engine', 'cte')


app.listen(PORT, () =>{
    console.log("Puerto en 3000")
})