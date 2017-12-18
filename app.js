const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
//const PORT = process.env.PORT || 3000;

//redirect to home page: sign in? log in? 
const { usersRouter} = require('./routers');
app.use(usersRouter);

const { jobsRouter } = require('./routers');
app.use(jobsRouter);

app.use('/', (req, res, next) => {
	return response.send("This is running")
});

app.listen(3000, () => {
	console.log(`Express is listening on 3000`);
});