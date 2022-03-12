const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  mail: String,
});

const User = mongoose.model('Users', userSchema);

module.exports = User;