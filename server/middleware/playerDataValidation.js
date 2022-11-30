module.exports = function(req, res, next){
    const { 
        name, 
        country, 
        score,
        role, 
        playerType, 
        ranking
    } = req.body;
    if(!name || 
        !country || 
        !score || 
        !role || 
        !playerType || 
        !ranking){
            return res.redirect('/player/new')
    }
    next()
    
}

