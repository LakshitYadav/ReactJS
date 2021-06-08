
const Sequelize = require('sequelize');

const sequelize = new Sequelize('assignment-react-backend', 'root', 'lakshit', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;