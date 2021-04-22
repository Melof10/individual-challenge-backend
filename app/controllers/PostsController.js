const db = require('../models');
const Post = db.posts;
const urlValidate = require('../middleware/urlValidate');

exports.findAll = (req, res) => {
    Post.findAll()
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
    const id = req.params.id;

    Post.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send({
            errors: error.errors
        })        
    });
}

exports.create = (req, res) => {
    const post = {
        title: req.body.title,
        body: req.body.body,
        image: req.body.image,
        categoryId: req.body.categoryId,        
    }
    
    const result = urlValidate(req.body.image)

    if(result){
        Post.create(post)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                errors: error.errors
            })
        });
    }else{
        res.status(400).send({
            message: 'Image does not exist'
        });
    }    
}

exports.update = (req, res) => {
    const postId = req.params.id;            

    if(!req.body.image){
        Post.update(req.body, {
            where: {
                id: postId
            }
        })
        .then(num => {
            if(num == 1){
                res.send({
                    message: 'Post updated'
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
            });
        })
    }else{
        const result = urlValidate(req.body.image)

        if(result){
            Post.update(req.body, {
                where: {
                    id: postId
                }
            })
            .then(num => {
                if(num == 1){
                    res.send({
                        message: 'Post updated'
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
                });
            })
        }else{
            res.status(500).send({
                message: 'Image does not exist'
            });
        }
    }
}

exports.delete = (req, res) => {
    const postId = req.params.id;

    Post.destroy({
        where: {
            id: postId
        }
    })
    .then(nums => {
        res.send({
            message: `${nums} Post deleted`
        })
    })
    .catch(error => {
        res.status(500).send({
            errors: error.errors
        })
    })
}