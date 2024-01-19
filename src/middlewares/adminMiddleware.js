function adminMiddleware(req, res, next) {   
    if(req.session.user.role != 1) {
        return res.render('./users/login');
    }
    next();
}

module.exports = adminMiddleware;