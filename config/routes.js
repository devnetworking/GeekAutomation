const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const authController = require('../controllers/authController');

router.get('/login', (req, res) => res.render('login'));

router.get('/register', (req, res) => res.render('register'));

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
