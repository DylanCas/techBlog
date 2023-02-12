const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model {

}

Blogs.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        textTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        textBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        // timestamps true to gain access to createdAt data
        timestamps: true,
        // Prevent sequelize from renaming the table
        freezeTableName: true,
        modelName: 'blog'
    }
)
// Look at createdAt for info on readme requirements line 38