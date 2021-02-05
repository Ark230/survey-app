const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')


const QuestionPerOption = sequelize.define('QuestionPerOption', {
    id_pregunta:{
        type: DataTypes.UUIDV1,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    id_opcion:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

  }, {
        tableName: 'PREGUNTA_X_OPCION',
        timestamps: false
  });
  

  module.exports = QuestionPerOption;