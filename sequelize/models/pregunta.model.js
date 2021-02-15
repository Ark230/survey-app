const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')


const Question = sequelize.define('Question', {
        id:{
            type: DataTypes.UUIDV1,
            allowNull: false,
            autoIncrement: true,
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
  

  module.exports = Question;
