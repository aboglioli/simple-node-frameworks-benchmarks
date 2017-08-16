# Benchmarks de HTTP, Express y Restify en NodeJS

Benchmarks realizados con ApacheBench a la API más básica posible hecha con la
librería *http* nativa de Node, Express y Restify.

## Entorno

- Sistema operativo: ArchLinux (kernel 4.11.3-1-ARCH)
- Procesador: Intel Core i7-7700
- Memoria RAM: 16 GB DDR4

## Versiones

- Versión de NodeJS: v8.0.0
- Versión de Express: 4.15.4
- Versión de Restify: 5.1.0

## Preparación

Instalar dependencias: `npm install`.

### Correr cada servidor

Correr de a uno por vez. Todos escuchan en el puerto 3000.

HTTP nativo: `node http.js`
Express: `node express.js`
Restify: `node restify.js`

### Correr benchmark

`ab -r -n 100000 -c 1000 http://localhost:3000/`
