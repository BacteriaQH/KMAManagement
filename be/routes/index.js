const router = require('express').Router();

const LoginController = require('../controllers/LoginController');
const RegisterController = require('../controllers/RegisterController');
const StudentController = require('../controllers/StudentController');
const UploadController = require('../controllers/UploadController');
const initWebRoutes = (app) => {
    router.post('/register', RegisterController);
    router.post('/login', LoginController);
    router.post('/upload', UploadController);
    router.post('/students/add', StudentController.AddStudents);
    return app.use('/api', router);
};

module.exports = initWebRoutes;
