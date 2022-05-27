const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));


app.listen(port, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});