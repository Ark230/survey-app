const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')


const UserAnswer = sequelize.define('UserAnswer', {
    id:{
        type: DataTypes.UUIDV1,
        allowNull: false,
        autoIncrement: true,
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
  

  module.exports = UserAnswer;