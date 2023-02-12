const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {

}

Comments.init(
    {
        // references the user making the comment
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            }
        },
        // references the blog the comment is tied to
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        // comments own ID
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // the body of text for the comment
        textBody: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        // timestamps true to gain access to createdAt data
        timestamps: true,
        // Prevent sequelize from renaming the table
        freezeTableName: true,
        modelName: 'comment'
    }
)