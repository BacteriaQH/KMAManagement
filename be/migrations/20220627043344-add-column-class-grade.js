'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.addColumn('Grades', 'class', Sequelize.STRING);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.removeColumn('Grades', 'class');
    },
};
