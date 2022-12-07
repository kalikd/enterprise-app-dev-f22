const User = require('../models/User')
module.exports = function(req, res, next){
    User.findById(req.session.uid, function(err, user){
        if(!!err || !user) 
            return res.redirect('/login')
        next()
    })
}