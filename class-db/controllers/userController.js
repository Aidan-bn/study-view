const User = require('../models/userModel')

// login user
const userLogin = async (req, res) => {
    res.json({msg: "Login User"})
}

// signup user
const userSignup = async (req, res) => {
    res.json({msg: "signup user"})
}

module.exports = { userLogin, userSignup }