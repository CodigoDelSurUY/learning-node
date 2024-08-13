const { DataTypes } = require('sequelize');
const myDB = require('../DB.js')
const Album = require('./album');

const Artist = myDB.define('Artist', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isBand: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'artists',
    paranoid: true
});

    // Define associations
    Artist.hasMany(Album, {
        as: 'albums',
        foreignKey: {
            allowNull: false,
            name: 'artistId',
        }
    });

module.exports = Artist;

