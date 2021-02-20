const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')
const Option = require('../models/opcion.model');

const Question = sequelize.define('Question', {
        id:{
            type: DataTypes.UUID,
            primaryKey:true
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull:false
        },
        id_encuesta:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
     },  
    {
        tableName: 'PREGUNTA',
        timestamps: false
  });
  
//   Question.associate = function(models) {
//     Question.hasMany(models.option, {
//       foreignKey: 'id_pregunta'
//     })
//   };


Question.hasMany(Option, {foreignKey: 'id_pregunta'});


module.exports = Question;
