module.exports = (sequelize, Sequelize) => {
    const posts = sequelize.define('posts', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Title is required'
                }
            }
        },
        body: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Body is required'
                }
            }
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Image is required'
                }
            }
        },
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true          
        }
    })

    return posts;
}