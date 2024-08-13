//module that initialize a connection with sequelize and expose the instance to be used by other modules
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db', 'user', 'password', {
    host: 'host',
    dialect: 'postgres'
  });

module.exports = sequelize
