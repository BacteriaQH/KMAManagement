const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        emailVerifyAt: {
            type: Date,
            default: new Date()
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            required: true
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);