const router = require('express').Router();

const AddStudents = async (req, res) => {
    const body = req.body;
    console.log(body);
};

module.exports = {
    AddStudents,
};
