const { User, Company } = require('../models')
const { formatResponse } = require('../helpers')

function getUsers(request, response, next) {
  return User.find()
    .then(users => {
      return response.json(formatResponse(users)); //does this work?
    })
    .catch(err => {
      console.error(err);
    });
}

function getUser(request, response, next) {
  return User.findById(request.params.id)
    .then(user => {
      return response.json(formatResponse(user));
    })
    .catch(err => {
      console.error(err);
    });
}

async function updateUser(request, response, next) {
  let updatedCompany;
  let deletedCompany;
  try {
    const user = await User.findById(request.params.id);
    const company = await Company.findById(user.currentCompany)
    if (company._id !== request.params.data.currentCompany) {
      updatedCompany = await Company.findByIdAndUpdate(request.params.data.currentCompany, { $addToSet: { employees: user._id } });
      deletedCompany = await Company.findByIdAndUpdate(company._id, { $pull: { employees: user._id }})
    }
    const updatedUser = await User.findByIdAndUpdate(request.params.id, request.body.data, {new:true})
    return response.status(200).json(formatResponse(updatedUser));
  } catch(e){
    console.error(e);
  }
}

function deleteUser(request, response, next) {
  const user = User.findById(request.params.id);
  return Company.findByIdAndUpdate(user.currentCompany, { $pull: { employees: user._id }})
    .then(() => {
      return User.findByIdAndRemove(request.params.id)
    .then(() => {
      return response.status(200);
    })
    .catch(err => {
      console.error(err);
    });
  })
}

function createUser(request, response, next) {
  const newUser = new User(request.body.data); 
  return newUser
    .save()
    .then(user => {
      return Company.findByIdAndUpdate(newUser.currentCompany, { $addToSet: { employees: user._id  } });
    })
    .then(user => {
      return response.status(201).json(formatResponse(user));
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};