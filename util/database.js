const {Sequelize} = require('sequelize');

console.log(process.env.PATH);
console.log(process.env.DATABASE_NAME);

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.CONNECTION_USERNAME, 
    process.env.CONNECTION_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
  });


  module.exports = sequelize;

//   // Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });