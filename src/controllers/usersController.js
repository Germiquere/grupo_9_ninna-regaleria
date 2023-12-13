const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

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


        if (res.body.remember != undefined) {
            res.cookie('remember',
            usuarioALoguearse.email, { maxAge: 120000})
            res.render('./')
        }
    },

    loginIn(req, res) {
        const users = getUsers();
        const user = users.find((element) => element.email === req.body.email);
        const errors = {
            unauthorized: {
                msg: 'Usuario y/o contraseña incorrecto'
            }
        };
        if (!user) {
            return res.render('./users/login', { errors })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.render('./users/login', { errors });
        }
        req.session.user = {
            timestamp: Date.now(),
            id: user.id,
            name: user.fullname,
            email: user.email,
            age: user.age,
            dni: user.dni
        };
        res.cookie('username', req.body.email)
        return res.redirect('/profile')
    },

    profile(req, res) {
        const { user } = req.session
        res.render('./users/profile', { user })
    },

    logout(req, res) {
        delete req.session.user;
        res.clearCookie('username');
        return res.redirect('/');
    },
    register(req, res) {
        res.render('./users/register')
    },
    create(req, res) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.render('./users/register', {
                errors: errors.mapped(),
                oldData: req.body
            });
        }
        const users = getUsers();
        const newUser = {
            id: [users.length]>0 ? users[users.length - 1].id + 1 : 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file ? req.file.filename : "user-default.png",
            category: "Usuario"
        };
        users.push(newUser);
        fs.writeFileSync(usersDataFilePath, JSON.stringify(users, null, 4));
        return res.redirect('/');
    }
};

module.exports = controller;