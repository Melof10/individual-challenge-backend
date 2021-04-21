module.exports = (app) => {
    const posts = require('../controllers/CategoriesController');

    let express = require('express');
    let router = express.Router();

    router.get('/categories', posts.findAll);    
    router.post('/category', posts.create);    

    app.use('/api', router);
}