const { config } = require('../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        operationAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require('./Post')(sequelize, Sequelize);
db.categories = require('./Category')(sequelize, Sequelize);

/***** Relations *****/ 

// Categories
db.categories.hasMany(db.posts);
// Posts
db.posts.belongsTo(db.categories);

module.exports = db;