const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')


const UserAnswer = sequelize.define('UserAnswer', {
    id:{
        type: DataTypes.UUIDV1,
        primaryKey:true
    },
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_respuesta:{
        type: DataTypes.INTEGER,
        allowNull: false   
    },
    id_pregunta:{
        type: DataTypes.INTEGER,
        allowNull: false   
    },
    detalle_respuesta:{
        type: DataTypes.STRING,
        allowNull: true
    }

  }, {
        tableName: 'UserAnswer',
        timestamps: false
  });
  
 UserAnswer.hasOne(User, {foreignKey: 'id_usuario'});
 UserAnswer.hasOne(Question, {foreignKey: 'id_pregunta'});
 UserAnswer.hasOne(Option, {foreignKey: 'id_respuesta'});


  module.exports = UserAnswer;