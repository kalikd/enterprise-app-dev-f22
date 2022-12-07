module.exports = function(req, res, next){
    isLoggedIn = !!req.session.uid;
    next()
 }