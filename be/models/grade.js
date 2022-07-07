'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Grades extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Grades.init(
        {
            student_id: DataTypes.STRING,
            class: DataTypes.STRING,
            subject_id: DataTypes.STRING,
            grade1: DataTypes.FLOAT,
            grade2: DataTypes.FLOAT,
            average1: DataTypes.FLOAT,
            first_exam: DataTypes.FLOAT,
            first_letter: DataTypes.STRING,
            second_letter: DataTypes.STRING,
            average2: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: 'Grades',
        },
    );
    return Grades;
};
