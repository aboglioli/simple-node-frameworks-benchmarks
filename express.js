const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Administración de Recursos');
});

app.listen(3000, function () {
    console.log('Escuchando en el puerto 3000');
});
