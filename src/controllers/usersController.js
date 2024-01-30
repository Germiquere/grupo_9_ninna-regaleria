const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const db = require('../database/models');
const {validationResult} = require('express-validator');

const usersDataFilePath = path.join(__dirname, '../data/users.json');
function getUsers() {
    return JSON.parse(fs.readFileSync(usersDataFilePath, 'utf-8'));
}

const controller = {
    login(req, res) {
        if (req.session.user) {
            return res.redirect('/profile')
        }
        res.render('./users/login')


        // if (res.body.remember != undefined) {
        // if (req.body.remember != undefined) {
        //     res.cookie('remember',
        //     usuarioALoguearse.email, { maxAge: 120000})
        //     res.render('./')
        // }
    },

    async loginIn(req, res) {
        console.log(req.body)
        try {
            const errors = validationResult(req);
      
            if (!errors.isEmpty()) {
              return res.render('./users/login', {
                errors: errors.mapped(),
                oldData: req.body
              });
            }
            
           const { email, password } = req.body;

            const user = await db.User.findOne({
              where: { email: email }
            });
      
            if (!user || !bcrypt.compareSync(password, user.password)) {
              return res.render('./users/login', {
                errors: {
                  unauthorized: {
                    msg: 'Usuario y/o contraseña incorrectos'
                  }
                },
                oldData: req.body
              });
            }
      
            req.session.user = {
              id: user.id,
              name: user.fullname,
              email: user.email,
              age: user.age,
              dni: user.dni,
              img: user.img,
              role: user.roles_id,
              timestamp: user.createdAt
            };

            if(req.body.remember) {
              res.cookie('userEmail', req.body.email, { maxAge: 120000})
            }

            res.redirect('/profile');
          } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
          }
        },
        // const users = getUsers();
        // const user = users.find((element) => element.email === req.body.email);
        // const errors = {
        //     unauthorized: {
        //         msg: 'Usuario y/o contraseña incorrecto'
        //     }
        // };
        // if (!user) {
        //     return res.render('./users/login', { errors })
        // }
        // if (!bcrypt.compareSync(req.body.password, user.password)) {
        //     return res.render('./users/login', { errors });
        // }
        // req.session.user = {
        //     timestamp: Date.now(),
        //     id: user.id,
        //     name: user.fullname,
        //     email: user.email,
        //     age: user.age,
        //     dni: user.dni
        // };
        // res.cookie('username', req.body.email)
        // return res.redirect('/profile')
    profile(req, res) {
        console.log(res.cookie.userEmail)
        const { user } = req.session
        res.render('./users/profile', { user })
    },

    logout(req, res) {
        delete req.session.user;
        res.clearCookie('username');
        return res.redirect('/');
    },
    register(req, res) {
        if (req.session.user) {
          return res.redirect('/profile')
      }
        res.render('./users/register')
    },
    async create(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('./users/register', {
                    errors: errors.mapped(),
                    oldData: req.body
                });
            }
            const role = await db.Roles.findOne({ where: { name: 'Usuario' } })
            db.User.create({
                fullname: req.body.fullname,
                age: req.body.age,
                dni: req.body.dni,
                email: req.body.email,
                password: req.body.password,
                img: req.file ? req.file.filename : "user-default.png",
                roles_id: role.id
            });
            return res.redirect('/login');
        } catch (error) {
            return res.status(500).send(error);
        }
    }
};

module.exports = controller;