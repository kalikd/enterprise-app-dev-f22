const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator')
const UserSchema = new Schema({
    username: {
        type: 'string',
        required: true, 
        unique: true,
        allowNull: false
    }, 
    password: String, 
    age: Number
});

UserSchema.pre('save',function(next) {
    const user = this
    bcrypt.hash(user.password, 5, function(err,hash){
        user.password = hash;
        next()
    })

})
UserSchema.plugin(uniqueValidator);

const User = model('User', UserSchema);

module.exports = User;