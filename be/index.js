const express = require('express');

const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

const conn = require('./config/conn');
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('api');
});

conn();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
