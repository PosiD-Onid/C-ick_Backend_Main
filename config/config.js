const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: "coffee1592",
    database: "click",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql"
  }
};

module.exports = config;
