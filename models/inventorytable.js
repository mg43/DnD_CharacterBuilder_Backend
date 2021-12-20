'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventoryTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  inventoryTable.init({
    userId: DataTypes.INTEGER,
    inventoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'inventoryTable',
  });
  return inventoryTable;
};