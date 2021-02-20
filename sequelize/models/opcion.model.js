const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')
const Question = require('../models/pregunta.model');


const Option = sequelize.define('Option', {
    id:{
        type: DataTypes.UUID,
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


  Option.associate = function(models) {
    Option.belongsTo(models.question, {
      foreignKey: 'id_pregunta'
    })
  };



//  Option.belongsTo(Question, {foreignKey: 'id_pregunta'});

module.exports = Option;