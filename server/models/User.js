const { Model, Schema } = require('mongoose');

const UserSchema = new Schema({name: String, password: String, age: number});

const User = Model('User', UserSchema);

module.exports = User;