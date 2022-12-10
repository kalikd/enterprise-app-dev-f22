const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const PlayerSchema = new Schema({
    name: {type: String, 
        required: [true, 'Name is required!!!'], 
        unique: true}, 
    country: {type: String, required: true}, 
    playerType: {type: String, required: true}, 
    role: {type: String, required: true},
    score: Number,
    ranking: Number,
    createdOn: {
        type: Date,
        default: new Date(),
    }
});

//PlayerSchema.plugin(uniqueValidator);

const Player = model('Player', PlayerSchema, 'Player');

module.exports = Player;