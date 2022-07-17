const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'da0bm8i1s3ocdl',
    'gxcmecjhlvdjod',
    '7ce5882b80d63516f8685afb5118a86257fa350cc62ccf989a1c8ad8e8392c15',
    {
        host: 'ec2-44-198-82-71.compute-1.amazonaws.com',
        port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        logging: false,
    },
);

const conn = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected db');
    } catch (error) {
        console.error(error);
    }
};

module.exports = conn;
