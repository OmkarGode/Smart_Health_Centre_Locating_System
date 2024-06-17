const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const UserModel = mongoose.model('Users', UsersSchema);

module.exports = UserModel;