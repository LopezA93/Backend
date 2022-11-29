require("dotenv").config();
const DB_TYPE = process.env.DB_TYPE;
const ProductosDaoMongo = require("./productos/ProductosDaoMongo");
const ProductosDaoFirebase = require("./productos/ProductosDaoFirebase");

let prodDAO;
class DAOsFactory {
  static ProdsDAO() {
    switch (DB_TYPE) {
      case "MongoDB":
        prodDAO = new ProductosDaoMongo();
        return prodDAO;

      case "Firebase":
        ////
        break;
    }
  }
}
module.exports = {
  DAOsFactory,
};
