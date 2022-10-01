require("dotenv").config();

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "port": DB_PORT,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "port": DB_PORT,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "port": DB_PORT,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
