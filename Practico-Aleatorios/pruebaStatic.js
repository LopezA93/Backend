const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/public', express.static('public'));


//Levantamiento servidor
app.listen(3000, () => {
    console.log('Servidor levantado puerto 3000')
});

app.on('error', error => console.log('error:', error))
