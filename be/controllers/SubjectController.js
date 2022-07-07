const { addSubject, listSubject, getSubjectById, updateSubject, getSubjectByDepartment } = require('../services/CRUD');
const { generateUID } = require('../services/generateUID');

const AddSubject = async (req, res) => {
    const body = req.body;
    body.id = generateUID(20);
    const result = await addSubject(body);
    result
        ? res.status(200).json({ code: 200, message: 'Create Subject success' })
        : res.status(401).json({ code: 401, message: 'Error' });
};
const ListSubject = async (req, res) => {
    const subject = await listSubject();
    const subs = [];
    subject.map((sub, index) => {
        subs.push({
            id: sub.dataValues.id,
            code: sub.dataValues.code,
            name: sub.dataValues.name,
            department: sub.dataValues.department,
            all: sub.dataValues.all,
            theory: sub.dataValues.theory,
            practice: sub.dataValues.practice,
            exercise: sub.dataValues.exercise,
        });
    });
    res.status(200).send(subs);
};

const GetSubjectById = async (req, res) => {
    const id = req.query.id;
    const subject = await getSubjectById(id);
    res.status(200).send(subject[0].dataValues);
};

const UpdateSubject = async (req, res) => {
    const body = req.body;
    const { id, ...other } = body;

    const resultQ = await updateSubject(id, other);
    resultQ
        ? res.status(200).json({ code: 200, message: 'Update subject successfully' })
        : res.status(401).json({ code: 401, message: 'Error' });
};

const GetSubjectByDepartment = async (req, res) => {
    const department = req.query.department;
    const subject = await getSubjectByDepartment(department);
    const subs = [];
    subject.map((sub, index) => {
        subs.push({
            id: sub.dataValues.id,
            code: sub.dataValues.code,
            name: sub.dataValues.name,
        });
    });
    res.status(200).send(subs);
};
module.exports = {
    AddSubject,
    ListSubject,
    GetSubjectById,
    UpdateSubject,
    GetSubjectByDepartment,
};
