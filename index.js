const express = require('express')
const app = express()
const port = 8080
const paymentsRepo = require('./dal/payments')

app.use(express.json())
app.use(
	express.urlencoded({
		extended: true,
	})
)

app.get('/', (request, response) => {
	response.json({ info: 'node.js, Express and Postgres API'})
});

app.get('/api/v1', (request, response) => {
	response.json({ info: 'v1 API to get credit card information'});
});

app.get('/api/v1/accounts/:account_id/payments', (request, response) => {
	if (!request.params.account_id) {
		response.status(500).json("{error: 'empty account_id is provided in the url'}");
		return;
	}

	paymentsRepo.getPaymentsForAccount(request.params.account_id)
		.then((results) => {
			response.status(200).json(results);
		})
		.catch((err) => {
			response.status(500).json("{error: " + err + "}");
		});
});

app.listen(port, () => {
	console.log('App running on port: ' + port)
});