const { generateUID } = require('../services/generateUID');
const { addGrade, findGradeByStudentID } = require('../services/CRUD');
const { calculateAvgGrade, calculateLetterGrade } = require('../services/calculateGrade');
const AddGrade = async (req, res) => {
    const body = req.body;
    const result = [];
    body.map(async (grade) => {
        const gradeI = {
            id: generateUID(20),
            student_id: grade.id,
            subject_id: grade.subject,
            class: grade.class,
            grade1: Number(grade.grade1),
            grade2: Number(grade.grade2),
            first_exam: grade.first_exam ? Number(grade.first_exam) : null,
            average1: grade.first_exam
                ? calculateAvgGrade(Number(grade.grade1), Number(grade.grade2), Number(grade.first_exam))
                : null,
            first_letter: Number(grade.first_exam)
                ? calculateLetterGrade(
                      calculateAvgGrade(Number(grade.grade1), Number(grade.grade2), Number(grade.first_exam)),
                  )
                : null,
            second_exam: grade.second_exam ? Number(grade.second_exam) : null,
            average2: grade.second_exam
                ? calculateAvgGrade(Number(grade.grade1), Number(grade.grade2), Number(grade.second_exam))
                : null,
            second_letter: Number(grade.second_exam)
                ? calculateLetterGrade(
                      calculateAvgGrade(Number(grade.grade1), Number(grade.grade2), Number(grade.second_exam)),
                  )
                : null,
        };
        const resultQ = await addGrade(gradeI);
        resultQ ? result.push(1) : result.push(0);
    });
    result.includes(0)
        ? res.status(401).json({ code: 401, message: 'Error' })
        : res.status(200).json({ code: 200, message: 'Add grade success' });
};
const FindGradeByStudentID = async (req, res) => {
    const id = req.query.student_id;
    const gradeQ = await findGradeByStudentID(id);
    const gradeR = [];
    gradeQ.map((grade) => {
        const { createdAt, updatedAt, ...other } = grade.dataValues;
        gradeR.push(other);
    });
    res.status(200).send(gradeR);
};
module.exports = {
    AddGrade,
    FindGradeByStudentID,
};
