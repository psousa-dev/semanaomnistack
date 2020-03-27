const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 *  Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */
 
  /**
   * Tipo de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmteros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    *  SQL: MySQL. SQLite, PostGreSQL, Oracle, MS SQL Server
    *  NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users (seria usando o driver do banco de dados a ser usado)
     * Query Builder: table('users').select('*').where() (É a maneira de manipular dados direto pelo js)
     */


