var Sequelize = require("sequelize");

var sequelize = new Sequelize("hockeyStats_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});

module.exports = connection;