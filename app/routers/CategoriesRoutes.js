module.exports = (app) => {
    const categories = require('../controllers/CategoriesController');

    let express = require('express');
    let router = express.Router();

    router.get('/categories', categories.findAll);    
    router.get('/category/:id', categories.findByPk);    
    router.post('/category', categories.create); 
    router.patch('/category/:id', categories.update);
    router.delete('/category/:id', categories.delete);

    app.use('/api', router);
}