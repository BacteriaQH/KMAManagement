'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.addColumn('Grades', 'second_exam', Sequelize.FLOAT);
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
