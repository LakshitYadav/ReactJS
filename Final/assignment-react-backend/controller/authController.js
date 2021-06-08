const jwt = require('jsonwebtoken');
const Window = require('window');
const window = new Window();

const TOKEN_SECRET = 'reactassignment';

const User = require('../models/users');

function generateAccessToken(username, role) {
  const payload = {
    username: username,
    role: role
  };
  const token = jwt.sign(payload, TOKEN_SECRET);
  var base64Url = token.split('.')[1];
  var decodedValue =JSON.parse( window.atob(base64Url));
  console.log(decodedValue)
  return token;
}

exports.login = (req, res, next) => {

  User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      if (user === null) {
        res.status(404).send({ "message": 'User not found' });
      }
      else if (user.dataValues.password !== req.body.password) {
        res.status(401).send({ "message": 'Invalid credentials' });
      }
      else {
        res.send({ "message": "Successfully logged in", "role": user.dataValues.role, "token": generateAccessToken(user.dataValues.username, user.dataValues.role) })
      }
    })
    .catch(err => console.log(err))
}
