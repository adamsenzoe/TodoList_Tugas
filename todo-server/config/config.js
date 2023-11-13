require("dotenv").config();
module.exports = {
  development: {
    username: "freedb_adamsenzoe",
    password: "wF2Y&3qz2d46*gG",
    database: "dfreedb_databaseAdam",
    host: "sql.freedb.tech",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
