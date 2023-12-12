const fs = require('fs');

function rememberMiddleware(req, res, next) {
  
  if (req.cookies.remember != undefined && 
    req.session.usuarioLogueado == undefined) {
      let usersJSON = fs.readFileSync('users.json', {
        encoding: 'utf-8'});
        let users;
        if (usersJSON == "") {
          users = [];
        } else {
          users = JSON.parse(userJSON);
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