const { Job } = require('../models')

const { formatResponse } = require('../helpers')

function getJobs(request, response, next) {
  return Job.find()
    .then(jobs => {
      return response.json(formatResponse(jobs)); //does this work?
    })
    .catch(err => {
      console.error(err);
    });
}

function getJob(request, response, next) {
  return Job.findById(request.params.id)
    .then(job => {
      return response.json(formatResponse(job));
    })
    .catch(err => {
      console.error(err);
    });
}

function updateJob(request, response, next) {
  return Job.findByIdAndUpdate(request.params.id, request.body.data)
    .then(job => {
      return response.status(200).json(formatResponse(job));
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteJob(request, response, next) {
  return Job.findByIdAndRemove(request.params.id)
  .then(() => {
    return response.status(200);
  })
  .catch(err => {
    console.error(err);
  });
}

function createJob(request, response, next) {
  const newJob = new Job(request.body.data); 
  return newJob
    .save()
    .then(job => {
      return response.status(201).json(formatResponse(job));
    })
    .catch(err => {
      console.error(err);
    });
}


module.exports = {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
};