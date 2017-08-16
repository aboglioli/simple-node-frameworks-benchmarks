const restify = require('restify');

var server = restify.createServer();
server.get('/', function(req, res, next) {
    res.send('Administración de Recursos');
    next();
});

server.listen(3000, function() {
    console.log('Escuchando en el puerto 3000');
});
