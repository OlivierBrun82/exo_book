'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    dispo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'Books',
    underscored: false
  });
  return Book;
};