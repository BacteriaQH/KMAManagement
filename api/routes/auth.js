const router = require('express').Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const {hashPassword} = require('../func/index');
//register
router.post('/register', async (req, res) => {
    const pass = hashPassword(req.body.password);
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: pass,
        isAdmin: req.body.isAdmin,
        role: req.body.role
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json('Wrong name or password');
        if (hashPassword(req.body.password) !== user.password) {
            return res.status(401).json('Wrong name or password');
        }
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },

            process.env.JWT_KEY,
            { expiresIn: '3d' },
        );
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
