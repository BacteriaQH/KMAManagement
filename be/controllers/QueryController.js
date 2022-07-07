const { getDepartment, getClass, getSchoolyear, getCourse } = require('../services/CRUD');

const QueryController = async (req, res) => {
    const body = req.body;
    const dataRes = {};
    for (let i of body) {
        switch (i) {
            case 'departments':
                const qDepartment = await getDepartment();
                const departments = [];
                qDepartment.map((department) => {
                    departments.push({ id: department.dataValues.id, name: department.dataValues.name });
                });
                dataRes.departments = departments;
                break;

            case 'classes':
                const qClass = await getClass();
                const classes = [];
                qClass.map((kClass) => {
                    classes.push({
                        id: kClass.dataValues.id,
                        code: kClass.dataValues.code,
                        name: kClass.dataValues.name,
                    });
                });
                classes.sort(function (a, b) {
                    var x = a.code.toLowerCase();
                    var y = b.code.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                });
                dataRes.classes = classes;
                break;
            case 'schoolyears':
                const qSchoolyear = await getSchoolyear();
                const schoolyears = [];
                qSchoolyear.map((schoolyear) => {
                    schoolyears.push({
                        id: schoolyear.dataValues.id,
                        display_name: schoolyear.dataValues.display_name,
                    });
                });
                dataRes.schoolyears = schoolyears;
                break;
            case 'courses':
                const qCourse = await getCourse();
                const courses = [];
                qCourse.map((course) => {
                    courses.push({
                        id: course.dataValues.id,
                        code: course.dataValues.code,
                        name: course.dataValues.name,
                    });
                });
                dataRes.courses = courses;
                break;
            default:
                res.status(404).send('No content of req.body');
                break;
        }
    }
    res.status(200).send(dataRes);
};

module.exports = QueryController;
