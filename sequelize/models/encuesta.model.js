const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database');
const Question = require('../models/pregunta.model');

const Survey = sequelize.define('Survey', {
    id:{
        type: DataTypes.UUID,
        primaryKey:true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
        tableName: 'ENCUESTA',
        timestamps: false
  });
  
  Survey.hasMany(Question, {foreignKey: 'id_encuesta'})


  module.exports = Survey;