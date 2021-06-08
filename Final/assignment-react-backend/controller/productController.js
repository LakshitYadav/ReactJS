const Product = require('../models/products');

//CREATE
exports.addProduct = (req, res, next) => {
    Product.create({
        productName: req.body.productName,
        price: req.body.price,
        imageURL: req.body.imageURL,
        expiryDate: req.body.expiryDate
    })
        .then(result => {
            res.send('Product added successfully')
        })
        .catch(err => console.log(err)
        );
};

//READ
exports.getAllProducts = (req, res, next) => {
    Product.findAll()
        .then(products => {
            if (products === null) {
                res.status(404).send({ message: 'No products found' });
            }
            let final = [];
            products.map(product => {
                final = final.concat(product.dataValues);
            })
            res.send(final);
        })
        .catch(err => console.log(err)
        );
};

//READ SPECIFIC
exports.getOneProduct = (req, res, next) => {
    Product.findOne({
        where: {
            productID: req.body.productID
        }
    })
        .then(product => {
            if (product === null) {
                res.status(404).send({ message: 'Product not found' });
            }
            res.send(product.dataValues);
        })
        .catch(err => console.log(err)
        );
};

//UPDATE SPECIFIC
exports.updateProduct = (req, res, next) => {
    //check params
    //store in .env
    Product.findOne({
        where: {
            productID: req.body.productID
        }
    })
        .then(product => {
            if (product === null) {
                res.status(404).send({ message: 'Product not found' });
            }
            product.productName= req.body.productName;
            product.price= req.body.price;
            product.imageURL= req.body.imageURL;
            product.expiryDate= req.body.expiryDate;

            return product.save();
        })
        .then(result => {
            res.send({ message: 'Product Details updated' });
        })
        .catch(err => console.log(err)
        );
};

//DELETE SPECIFIC
exports.deleteProduct = (req, res, next) => {
    Product.findOne({
        where: {
            productID: req.body.productID
        }
    })
        .then(product => {
            if(product === null){
                res.status(404).send({message: 'Product not found'});
            }
            return product.destroy();
        })
        .then(result => {
            res.send({message: 'Product has been deleted'});
        })
        .catch(err => console.log(err)
    );
};