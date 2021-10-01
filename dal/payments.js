const formatter = require('date-and-time')
const dbcp = require('./db-cp')
const attrMapper = require('../util/attr-mapper')

const getPaymentsForAccount = (account_id) => {
	console.log('invoking get payments for account: ' + account_id);

	return new Promise((resolve, reject) => {
		dbcp.pool.query(
			'SELECT * FROM payments where account_id = $1',
			[account_id],
			(error, results) => {
				if (error) {
					reject(error);
					return;
				}

				console.log('received ' + results.rows.length + ' records from db');
				results.rows.forEach((row) => {
					var date = row['date'];
					row['date'] = format(date, 'YYYY-MM-DD');
					row['internal_status'] = row['status'];
					row['status'] = attrMapper.mapper.get(row['status']);
					row['amount_cents'] = row['actual_amount_cents'] 
						|| row['scheduled_amount_cents'];

						
					delete row['actual_amount_cents'];
					delete row['scheduled_amount_cents'];
				});

				resolve(results.rows);
			}
		);	
	});
}

const format = (date, format) => {
	return formatter.format(date, format);
}

module.exports.getPaymentsForAccount = getPaymentsForAccount;