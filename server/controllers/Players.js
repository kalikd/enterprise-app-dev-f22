const Player = require('../models/Player')
module.exports.getPlayers = async function(req, res){
    const players = await Player.find({});
    res.render('player',{ players })
    //res.json({msg:'Successfully Received!', data: players, status:'success'});
}