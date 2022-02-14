const app = require('../app');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
require('./connection');

app.listen(PORT, console.log(`Server started on port ${PORT}`));
