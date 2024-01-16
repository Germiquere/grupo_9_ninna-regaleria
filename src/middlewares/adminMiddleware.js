function adminMiddleware(req, res, next) {
    if(req.users[category] === 'Usuario') {
        return res.render('./users/login');
    }
    next();
}

module.exports = adminMiddleware;