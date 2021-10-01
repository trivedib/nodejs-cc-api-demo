const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	host: 'db',
	database: 'cc_api_dev',
	port: 5432
})

module.exports = {
	pool
}