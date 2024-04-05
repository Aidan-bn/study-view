const mongoose = require('mongoose')
// const { type } = require('os')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: stringify,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);