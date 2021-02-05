const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')


const Survey = sequelize.define('Survey', {
    id:{
        type: DataTypes.UUIDV1,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    preguntas: {
        type: DataTypes.STRING,
        allowNull: false
    }

  }, {
        tableName: 'ENCUESTA',
        timestamps: false
  });
  

  module.exports = Survey;