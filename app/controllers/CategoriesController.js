const db = require('../models');
const Category = db.categories;

exports.findAll = (req, res) => {
    Category.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        res.status(500).send({
            errors: error.errors
        })
    });
}

exports.create = (req, res) => {
    const category = {
        name: req.body.name
    };    

    Category.create(category)
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        res.status(500).send({
            errors: error.errors
        })
    });
}
