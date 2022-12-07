const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema({
    name: {type: String, required: true, unique: true}, 
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

const Player = model('Player', PlayerSchema, 'Player');

module.exports = Player;