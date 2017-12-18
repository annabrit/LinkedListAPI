const express = require('express');

const  { companiesHandler } = require('../handlers');

const router = express.Router();

router
	.route('/companies')
		.get(companiesHandler.getCompanies) 
		.post(companiesHandler.createCompany)

router
	.route('/companies/:id')
		.get(companiesHandler.getCompany)
		.patch(companiesHandler.updateCompany) 
		.delete(companiesHandler.deleteCompany)


module.exports = router;						