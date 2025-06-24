'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // define association here
    }
  }

  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'Cities',
    timestamps: true // ensures Sequelize knows to handle createdAt/updatedAt
  });

  return City;
};
