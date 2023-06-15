const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res) => {
    res.render('./login/pages-login');
};

exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            // handle case when user with provided email does not exist
            return res.status(401).json({ message: 'Email or password is incorrect' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            // handle case when password does not match
            return res.status(401).json({ message: 'Email or password is incorrect' });
        }

        // set user session, redirect or send response as needed
        req.session.user = user;
        return res.redirect('/profile');
    } catch (error) {
        // handle error
        return next(error);
    }
};