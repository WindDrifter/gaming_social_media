var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var passportLocalMongoose = require('passport-local-mongoose');
var Post = new mongoose.Schema({
  body: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  user_id: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('posts', Post);
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzza                                                         QAAAAA
