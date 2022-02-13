const mongoose = require('mongoose');
require('dotenv').config();
const DB_CONNECT = process.env.DB_CONNECT;

const db = mongoose
  .connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

module.exports = db;
