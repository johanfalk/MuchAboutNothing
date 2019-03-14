const emailValidator = require('email-validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const schema = new mongoose.Schema({
  email: {
    type: String, 
    required: true, 
    lowercase: true,
    unique : true,
    validate: emailValidator.validate
  },
  password: { 
    type: String, 
    required: true
  }
});
  
schema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password);
  next();
});

const User = mongoose.model('User', schema);

module.exports = User;
