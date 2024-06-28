const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  confirmPassword: String,
  phonenumber: String
});

module.exports = mongoose.model('Signup', signupSchema);
