const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//const userRoute = require('./routes/User');
const authRoute = require('./routes/auth');
// const productRoute = require('./routes/Product');

const app = express();

dotenv.config();

const server = process.env.MONGO_URL;
const database = 'KMAManagement';

mongoose
    .connect(`mongodb://${server}/${database}`)
    .then(() => {
        console.log('connected db');
    })
    .catch((error) => {
        console.log(error);
    });

app.get('/api/test', (req, res, next) => {
    console.log('test is success');
});
app.use(express.json());
app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);
// app.use('/api/products', productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});