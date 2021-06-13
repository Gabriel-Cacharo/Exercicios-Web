const config = require('../knexfile')
const knex = require('knex')(config)

knex.migrate.latest([config]) //Se for em sistemas maiores não é bom ser aplicado
module.exports = knex