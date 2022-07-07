'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Grades', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                unique: true,
            },
            student_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            class: {
                type: Sequelize.STRING,
            },
            subject_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            grade1: {
                type: Sequelize.FLOAT,
            },
            grade2: {
                type: Sequelize.FLOAT,
            },
            average1: {
                type: Sequelize.FLOAT,
            },
            first_exam: {
                type: Sequelize.FLOAT,
            },
            first_letter: {
                type: Sequelize.STRING,
            },
            second_letter: {
                type: Sequelize.STRING,
            },
            second_exam: {
                type: Sequelize.FLOAT,
            },
            average2: {
                type: Sequelize.FLOAT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Grades');
    },
};
