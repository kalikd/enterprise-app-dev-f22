const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema({
    name: String, 
    country: String, 
    playerType: String, 
    role: String,
    score: Number,
    ranking: Number,
    createdOn: {
        type: Date,
        default: new Date(),
    }
});

const Player = model('Player', PlayerSchema, 'Player');

module.exports = Player;