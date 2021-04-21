module.exports = (app) => {
    const posts = require('../controllers/PostsController');

    let express = require('express');
    let router = express.Router();

    router.get('/posts', posts.findAll);
    router.get('/posts/:id', posts.findByPk);
    router.post('/posts', posts.create);
    router.patch('/posts/:id', posts.update);
    router.delete('/posts/:id', posts.delete);

    app.use('/api', router);
}