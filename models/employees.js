const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    jobTitle: { type: String, required: true },
    department: {type: String, required: true},
    address: { type: String, required: true },

}, { timestamps: true });

let modelCapsule = mongoose.model('employee', schema);
module.exports = modelCapsule;