//Express para la creación del servidor
const express = require('express');
const path = require('path');
const _connect = require('./config/db');
let app = express();

_connect();

//Escogemos el puerto de escucha
app.listen('3000');
console.log('La aplicación está escuchando en http://localhost:3000');
app.use(express.static(__dirname + '/views'));

app.get('/' , (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/inicio.html'));
});



