const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');
const userController = require('../app/controllers/UserController');

// Page d'accueil
router.get('/', homeController.getIndex);

// Profil utilisateur
router.get('/user/:id', userController.getProfile);



module.exports = router;
