const fs = require('fs');
const db = require('../database/models')

function rememberMiddleware(req, res, next) {
  
  if (req.cookies.remember != undefined && 
    req.session.usuarioLogueado == undefined) {
      let users = db.User.findAll()
        if (users == "") {
          users = [];
        } else {
          users = JSON.parse(user);
        }
        let usuarioALoguearse
        
        for (let i = 0; i < users.length; i++) {
          if(users[i].email == req.cookies.remember) {
            usuarioALoguearse = user[i];
            break;
          }
        }
        
        req.session.usuarioLogueado = usuarioALoguearse;
      }
      
      next();
}

module.exports = rememberMiddleware;