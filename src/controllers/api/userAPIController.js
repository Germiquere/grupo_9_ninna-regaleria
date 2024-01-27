const db = require('../../database/models');
const sequelize = db.sequelize;

const userAPIController = {
    'list': (req, res) => {
        db.User.findAll({include: ['Roles']})
            .then(user => {
                res.json({
                    count: user.length,
                    users: user.map(user => ({
                        id: user.id,
                        fullname: user.fullname,
                        email: user.email,
                        role: user.Roles.name,
                        img: 'http://localhost:'+process.env.PORT+'/images/users/avatars/' + user.img, 
                        detail: '/users/detail/'+user.id
                    }))
                })
                });
        },
        'detail': (req, res) => {
            db.User.findByPk(req.params.id, {attributes: {exclude: ['password']}})
            .then(user => {
                res.json(user)
            })
        },
        'lastCreated': (req, res) => {
            const lastCreatedUser = db.User.findOne({
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            .then(user => {
                res.json (user)
            })

            return lastCreatedUser;
        }
    }

module.exports = userAPIController;