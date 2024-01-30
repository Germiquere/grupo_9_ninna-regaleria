function adminMiddleware(req, res, next) {   
    
    if(req.session.user.roles_id != 1) {
        return res.render('./users/login');
    }
    next();
}

module.exports = adminMiddleware;