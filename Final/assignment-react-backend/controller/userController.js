const User = require('../models/users');

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
//web dev simplified -error boundaries
//CREATE
exports.addUser = (req, res, next) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        imageURL: req.body.imageURL,
        dob: req.body.dob,
        age: getAge(req.body.dob)
    })
        .then(result => {
            res.send('User added successfully')
        })
        .catch(err => console.log(err)
        );
};


//READ
exports.getAllUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            if(users === null){
                res.status(404).send({message: 'No users found'});
            }
            let final = [];
            users.map(user => {
                final = final.concat(user.dataValues);
            })
            res.send(final);
        })
        .catch(err => console.log(err)
        );
};

//READ SPECIFIC
exports.getOneUser = (req, res, next) => {
    User.findOne({
        where: {
            username: req.params.username
        }
    })
        .then(user => {
            if(user === null){
                res.status(404).send({message: 'User not found'});
            }
            res.send(user.dataValues);
        })
        .catch(err => console.log(err)
    );
};

//UPDATE SPECIFIC
exports.updateUser = (req, res, next) => {
    //check params
    //store in .env
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if(user === null){
                res.status(404).send({message: 'User not found'});
            }
            user.password = req.body.password;
            user.role = req.body.role;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.imageURL = req.body.imageURL;
            user.dob = req.body.dob;
            user.age = getAge(req.body.dob);
            console.log(user);
            return user.save();
        })
        .then(result => {
            res.send({message: 'User Details updated'});
        })
        .catch(err => console.log(err)
    );
};

//DELETE SPECIFIC
exports.deleteUser = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if(user === null){
                res.status(404).send({message: 'User not found'});
            }
            return user.destroy();
        })
        .then(result => {
            res.send({message: 'User has been deleted'});
        })
        .catch(err => console.log(err)
    );
};

