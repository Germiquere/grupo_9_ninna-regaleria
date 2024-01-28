const db = require('../../database/models');
const sequelize = db.sequelize;

const userAPIController = {
    'count': (req, res) => {
        db.User.findAll({include: ['Roles']})
        .then(user => {res.json({
            count: user.length,
            countByCategory: {
                admin: user.filter(user => user.roles_id === 1).length,
                user: user.filter(user => user.roles_id === 2).length,
                invite: user.filter(user => user.roles_id === 3).length
            }
        })});
    },

    'list': (req, res) => {
        const {page = 1} = req.query;
        db.User.findAll({
            include: ['Roles'],
            limit: 10,
            offset: (Number(page)-1)*10
        })
            .then(user => {
                res.json({
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