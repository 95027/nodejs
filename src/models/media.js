'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Media.init({
    mediable_type: DataTypes.STRING,
    mediable_id: DataTypes.INTEGER,
    filename: DataTypes.STRING,
    filepath: DataTypes.STRING,
    filetype: DataTypes.STRING,
    filesize: DataTypes.STRING,
    featured: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};