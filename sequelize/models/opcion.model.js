const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')


const Option = sequelize.define('Option', {
    id:{
        type: DataTypes.UUIDV1,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_pregunta:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
        tableName: 'OPCION',
        timestamps: false
  });
  

  module.exports = Option;