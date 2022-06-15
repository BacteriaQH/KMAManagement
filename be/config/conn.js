const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('kmamanagement', 'root', null, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    // logging: false,
});

const conn = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected db');
    } catch (error) {
        console.error(error);
    }
};

module.exports = conn;
