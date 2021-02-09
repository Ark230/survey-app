const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.CONNECTION_USERNAME, 
    process.env.CONNECTION_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
  });


  module.exports = sequelize;
