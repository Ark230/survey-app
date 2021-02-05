const {Sequelize} = require('sequelize');
const User = require('./models/user.model');
const Option = require('./models/opcion.model');
const QuestionPerOption = require('./models/pregunta_x_opcion.model');
const Question = require('./models/pregunta.model');
const UserAnswer = require('./models/respuesta_usuario.model');
const Survey = require('./models/encuesta.model');


Survey.hasOne(Question, {foreignKey: 'usuario_id'});
QuestionPerOption.hasMany(Option, {foreignKey: 'id_opcion'});
UserAnswer.hasOne(User, {foreignKey: 'id_usuario'});
UserAnswer.hasOne(Question, {foreignKey: 'id_pregunta'});
UserAnswer.hasOne(Option, {foreignKey: 'id_respuesta'});




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