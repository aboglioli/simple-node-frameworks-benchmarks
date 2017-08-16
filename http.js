const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    response.end('Administración de Recursos');
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
