module.exports = function(req, res, next){
   if(req.session.uid){
        return res.redirect('/home')
   }
   next()
}