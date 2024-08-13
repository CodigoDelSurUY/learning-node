const { DataTypes } = require('sequelize');
const myDB = require('../DB.js')

const Album = myDB.define('Album', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  artistId : {
    type : DataTypes.INTEGER,
    field : "artist_id" 
  }
}, {
    tableName: 'albums',
    paranoid : true
});

module.exports = Album;