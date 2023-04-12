const express = require("express");
require('dotenv').config();
const portfolioRoute = require('./routes/portfolioRoute');
const app = express();

app.use(express.json());

app.use('/api/portfolio', portfolioRoute);

require('./config/dbConfig');

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server running on PORT ${port}`);
});