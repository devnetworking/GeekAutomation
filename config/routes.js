const express = require('express');
const passport = require('passport');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');
const userController = require('../app/controllers/UserController');
const loginController = require('../app/controllers/LoginController');
const dashboardController = require('../app/controllers/DashboardController');
const authMiddleware = require('../utils/authMiddleware');

// Page d'accueil
router.get('/', homeController.getIndex);

// Profil utilisateur
router.get('/user/:id', userController.getProfile);

router.get('/login', loginController.getLogin);
router.post('/login', loginController.postLogin);

router.get('/dashboard', dashboardController.getIndex);


module.exports = router;
