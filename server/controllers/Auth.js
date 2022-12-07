module.exports.logout = function(req, res){
    req.session.destroy();
    isLoggedIn = false;
    res.redirect('/login')
}