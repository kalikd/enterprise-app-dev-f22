const { Model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: String, 
    password: String, 
    age: number
});

UserSchema.pre('save',function(next) {
    const user = this
    bcrypt.hash(user.password, 5, function(err,hash){
        user.password = hash;
        next()
    })

})

const User = Model('User', UserSchema);

module.exports = User;