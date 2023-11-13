const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const {validationResult} = require('express-validator');

const pathFileUsers = path.join(__dirname, '../data/users.json');
const getUser = function () {
    return JSON.parse(fs.readFileSync(pathFileUsers, 'utf-8'));
}

const controller = {
    login(req, res) {
        res.render('./users/login')
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
        const users = getUser();
        const newUser = {
            id: [users.length]>0 ? users[users.length - 1].id + 1 : 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file ? req.file.filename : "user-default.png",
            category: "Usuario"
        };
        users.push(newUser);
        fs.writeFileSync(pathFileUsers, JSON.stringify(users, null, 4));
        return res.redirect('/');
    }
};

module.exports = controller;