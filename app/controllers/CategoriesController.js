const db = require('../models');
const CategoriesRoutes = require('../routers/CategoriesRoutes');
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

exports.findByPk = (req, res) => {
    const categoryId = req.params.id;

    Category.findByPk(categoryId)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            errors: error.errors
        })
    })
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

exports.update = (req, res) => {
    const categoryId = req.params.id;

    Category.update(req.body, {
        where: {
            id: categoryId
        }
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Category updated'
            })
        }else{
            res.send({
                message: 'Error'
            })
        }
    })
    .catch(error => {
        res.status(500).send({
            errors: error.errors
        })
    })
}

exports.delete = (req, res) => {
    const categoryId = req.params.id;

    Category.destroy({
        where: {
            id: categoryId
        }
    })
    .then(nums => {
        res.send({
            message: `${nums} category deleted`
        })
    })
}