const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quote extends Model {}

Quote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    discription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'quote',
  }
);

module.exports = Quote;
