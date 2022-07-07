'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.addColumn('Grades', 'average1', Sequelize.FLOAT);
        queryInterface.addColumn('Grades', 'average2', Sequelize.FLOAT);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
