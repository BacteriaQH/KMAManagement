'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.addColumn('Grades', 'first_exam', Sequelize.FLOAT);
        queryInterface.addColumn('Grades', 'first_letter', Sequelize.STRING);
        queryInterface.addColumn('Grades', 'second_letter', Sequelize.STRING);
        queryInterface.removeColumn('Grades', 'avarage');
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
