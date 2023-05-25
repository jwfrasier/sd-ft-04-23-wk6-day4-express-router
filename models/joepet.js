"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JoePet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JoePet.init(
    {
      name: DataTypes.STRING,
      species: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JoePet",
    }
  );
  return JoePet;
};
