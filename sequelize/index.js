const User = require('./models/user.model');
const Option = require('./models/opcion.model');
const Question = require('./models/pregunta.model');
const UserAnswer = require('./models/respuesta_usuario.model');
const Survey = require('./models/encuesta.model');

User.hasMany(Survey, {foreignKey: 'id_usuario'});
Survey.belongsTo(User, {foreignKey: 'id_usuario'});

Question.hasMany(Option, {foreignKey: 'id_pregunta'});
Option.hasOne(Question, {foreignKey: 'id_pregunta'})

