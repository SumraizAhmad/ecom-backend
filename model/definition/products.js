const { Sequelize, Model, DataTypes } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Product extends Model {}
Product.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Product",
  }
);

module.exports = Product;
