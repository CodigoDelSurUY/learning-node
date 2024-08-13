const { DataTypes } = require('sequelize');
const myDB = require('../DB')

const User = myDB.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field : 'name'
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
            field : 'last_name'
        },
        username: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        nueva : {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: 'users',
        timestamps: false,
        paranoid : true
    },
);


module.exports = User