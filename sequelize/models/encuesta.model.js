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
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
        tableName: 'ENCUESTA',
        timestamps: false
  });
  

  module.exports = Survey;