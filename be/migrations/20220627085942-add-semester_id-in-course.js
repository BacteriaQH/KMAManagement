'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.addColumn('Courses', 'semester_id', Sequelize.STRING);
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
