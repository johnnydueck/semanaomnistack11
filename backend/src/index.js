const express = require ('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);



/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP
 * 
 * GET: buscar/listar uma informação no back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */


 /**
  * Tipo de parametros
  * 
  * Query params: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */



