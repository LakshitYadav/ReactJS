const jwt = require('jsonwebtoken');
const User = require('../models/users');
const TOKEN_SECRET = 'reactassignment';
const Window = require('window');
const window = new Window();

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token === null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}

exports.isAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    const base64Url = token.split('.')[1];
    const decodedValue = JSON.parse( window.atob(base64Url));
    const authUsername = decodedValue.username;

    User.findOne({
        where: {
            username: authUsername,
            role: 'admin'
        }
    })
        .then(user => {
            if (user === null) {
                res.status(401).send({ message: 'You do not have admin privileges' });
            }
            else {
                next();
            }
        })
        .catch(err => console.log(err)
        );
}