const db = require('../models/index');

module.exports.createUser = async (body) => {
    try {
        await db.User.create(body);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports.findUser = async (body) => {
    try {
        const user = await db.User.findOne({
            where: {
                email: body.email,
            },
        });
        return user.dataValues;
    } catch (err) {
        console.log(err);
    }
};

module.exports.addStudent = async (body) => {
    try {
        const student = await db.Student.create(body);
    } catch (err) {
        console.log(err);
        return false;
    }
};
