const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	firstName: String,
	energyPoints: Number,
	googleID: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;