const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        classId: {
            type: Number,
        },
        password: {
            type: String,
            required: true,
        }, 
    },
    { timestamps: true },
);

module.exports = mongoose.model('Student', StudentSchema);
