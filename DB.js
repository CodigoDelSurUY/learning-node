//module that initialize a connection with sequelize and expose the instance to be used by other modules
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE,process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
        dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // This allows self-signed certificates
    }
  }
  });

module.exports = sequelize