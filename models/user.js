var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var passportLocalMongoose = require('passport-local-mongoose');
var User = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
