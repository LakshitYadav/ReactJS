const { Sequelize } = require('sequelize');

const sequelize = require('../utils/database');

const Product = sequelize.define('products', {
    productID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING,
        defaultValue: 'https://place-hold.it/240x140',
        allowNull: false
    },
    expiryDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

module.exports = Product;