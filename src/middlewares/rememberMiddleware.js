const db = require('../database/models');

async function rememberMiddleware(req, res, next) {
  const emailCookie = req.cookies.userEmail;
  let userInCookie = null;

  if (req.cookies.userEmail) {
    try {
      const data = await db.User.findOne({ where: { email: emailCookie } });
      userInCookie = data;
      req.session.user = userInCookie;
    } catch (error) {
      console.error('Error al buscar usuario por email:', error);
    }
  }

  next();
}

module.exports = rememberMiddleware;