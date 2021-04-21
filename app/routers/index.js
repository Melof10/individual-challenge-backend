function getRoutes(app){
    require('./PostsRoutes')(app);
    require('./CategoriesRoutes')(app);
}

module.exports = getRoutes;