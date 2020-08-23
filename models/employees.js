const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: Number },
    jobTitle: { type: String },
    address: { type: String },

}, { timestamps: true });

let modelCapsule = mongoose.model('employee', schema);
module.exports = modelCapsule;