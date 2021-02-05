
const {DataTypes} = require("sequelize");
const sequelize = require('../../util/database')


const User = sequelize.define('User', {
    id:{
        type: DataTypes.UUIDV1,
        allowNull: false,
        autoIncrement: true,
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
  

  module.exports = User;

/* set foreign keys - Column options (documentation index)
  references: {
    // This is a reference to another model
    model: Bar,

    // This is the column name of the referenced model
    key: 'id',

    // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
    deferrable: Deferrable.INITIALLY_IMMEDIATE
    // Options:
    // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
    // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
    // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
  }
},

*/
