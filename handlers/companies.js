const { Company } = require('../models')

const { formatResponse } = require('../helpers')

function getCompanies(request, response, next) {
  return Company.find()
    .then(companies => {
      return response.json(formatResponse(companies)); //does this work?
    })
    .catch(err => {
      console.error(err);
    });
}

function getCompany(request, response, next) {
  return Company.findById(request.params.id)
    .then(company => {
      return response.json(formatResponse(company));
    })
    .catch(err => {
      console.error(err);
    });
}

function updateCompany(request, response, next) {
  return Company.findByIdAndUpdate(request.params.id, request.body.data)
    .then(Company => {
      return response.status(200).json(formatResponse(company));
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteCompany(request, response, next) {
  return Company.findByIdAndRemove(request.params.id)
  .then(() => {
    return response.status(200);
  })
  .catch(err => {
    console.error(err);
  });
}

function createCompany(request, response, next) {
  const newCompany = new Company(request.body.data); 
  return newCompany
    .save()
    .then(company => {
      return response.status(201).json(formatResponse(company));
    })
    .catch(err => {
      console.error(err);
    });
}


module.exports = {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany
};