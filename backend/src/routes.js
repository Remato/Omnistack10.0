const { Router } = require('express');  //quando quer importar uma parte da biblioteca(modulo)
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

//Métodos HTTP GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso no PUT ou DELETE)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-Relacional)
routes.get('/devs', DevController.index);
routes.post('/devs',DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;