module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define('categories', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Name is required'
                }
            }
        }
    })

    return category;
}