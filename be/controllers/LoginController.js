const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { comparePassword } = require('../services/hash');
const { findUser } = require('../services/CRUD');

dotenv.config();

const LoginController = async (req, res) => {
    const body = req.body;
    const user = await findUser(body);
    if (user) {
        const validPassword = await comparePassword(body.password, user.password);
        if (validPassword) {
            const accessToken = jwt.sign(
                {
                    id: user.id,
                    role_symbol: user.role_symbol,
                },
                process.env.JWT_ACCESS_KEY,
                { expiresIn: '1d' },
            );
            const { password, ...others } = user;
            res.send({
                code: 200,
                result: {
                    ...others,
                    accessToken,
                },
            });
        } else {
            res.send({
                code: 400,
                message: 'Invalid password',
            });
        }
    } else {
        return res.send({ code: 401, message: "User doesn't exist" });
    }
};

module.exports = LoginController;
