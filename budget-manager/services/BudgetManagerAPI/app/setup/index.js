const mongoose = require('mongoose'),
  UserModel = require('@BudgetManagerModels/user');

const models = {
  User: mongoose.model('User')
}

module.exports = models;

// ensure that models are loaded before anything else in the application