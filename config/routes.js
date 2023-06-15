const express = require('express');
const passport = require('passport');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');
const userController = require('../app/controllers/UserController');

// Page d'accueil
router.get('/', homeController.getIndex);

// Profil utilisateur
router.get('/user/:id', userController.getProfile);

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);


module.exports = router;
