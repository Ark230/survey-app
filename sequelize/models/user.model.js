const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database');
const Survey = require('../models/encuesta.model');

const User = sequelize.define('User', {
    id:{
        type: DataTypes.UUID,
        primaryKey:true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
        tableName: 'USUARIO',
        timestamps: false
  });
  

  User.hasMany(Survey, {foreignKey: 'id_usuario'});

  module.exports = User;
