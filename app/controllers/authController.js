const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = (req, res) => {
  const { username, nom, prenom, email, type, password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      User.create({
        username,
        nom,
        prenom,
        email,
        type,
        password: hash,
        notification: false,
        supprime: false,
        actif: true
      }).then(user => {
        req.login(user, err => {
          if (err) {
            console.log(err);
            return res.redirect('/register');
          }
          return res.redirect('/dashboard');
        });
      }).catch(err => console.log(err));
    });
  });
};

exports.login = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
});
