const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const User = require('./models/users');
const Product = require('./models/products');

const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res) => { res.status(204).end() });



app.use('/auth', authRoutes);
app.use(userRoutes);
app.use(productRoutes);



User.sync().catch(err => console.log(err));
Product.sync().catch(err => console.log(err));

const server = app.listen(8080, () => {
    console.log('listening on port %s...', server.address().port);
});


































// User.create({
//     username: 'fdsfdsdsds',
//     password: 'fdsfds',
//     role: 'admin',
//     firstName: 'dfds',
//     lastName: 'dsfdsf',
//     imageURL: 'fdsfsdf',
//     dob: '1999-01-25',
//     age: 132 //Calculate age from DOB
// })

// User.findAll().then(result => {
//     console.log(result[1].username)
//     let final = [];
//     result.map(user => {
//         final = final.concat(user.dataValues);
//     })
//     console.log(final);
// });

// User.findByPk('fdsfdsdsds').then(user => console.log(user.dataValues));

//
// User.findByPk('fdsfdsdsds').then(user => {
//     user.password = 'laksit';
//     return user.save();
// }).then(resp => console.log(resp))

// User.findByPk('fdsfds').then(user => {
//     return user.destroy();
// }).then(resp => console.log(resp))