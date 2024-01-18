function adminMiddleware(req, res, next) {
    if(res.user.category === 'Usuario') {
        return res.render('./users/login');
    }
    next();
}

module.exports = adminMiddleware;