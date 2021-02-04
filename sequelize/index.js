const {Sequelize} = require('sequelize');
const User = require('./models/user.model');

console.log(process.env);

// const users = async() => {
//     const a = await User.findAll();
//     console.log(a);
// }

// console.log(users());
//   const modelDefiners = [
// 	require('./models/user.model')
// ];

// for (const modelDefiner of modelDefiners) {
// 	modelDefiner(sequelize);
// }
  
// module.exports = {sequelize, USer};


// connectionTest = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     sequelize.close();
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// connectionTest();