const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env.local') });
const mongodb = require('./db');
var cors = require('cors');

mongodb();
const app = express();
const port=5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));

app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`);
})