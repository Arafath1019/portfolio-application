const express = require("express");
require('dotenv').config();

const app = express();

require('./config/dbConfig');

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server running on PORT ${port}`);
});