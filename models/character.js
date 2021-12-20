'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  character.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    speed: DataTypes.INTEGER,
    size: DataTypes.STRING,
    class: DataTypes.STRING,
    con: DataTypes.INTEGER,
    str: DataTypes.INTEGER,
    dex: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    wis: DataTypes.INTEGER,
    cha: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'character',
  });
  return character;
};