var config = require("../../config.json");
const db = {};
config = config.db;
let sequelize = require("../../common/dbConnection");
const Product = require("./products");

const models = {
  Product,
};

sequelize.model = models;
db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = { db, models };
