const User = require('../models/User');

exports.getLogin = (req, res) => {
    res.render('./login/loginpage');
};