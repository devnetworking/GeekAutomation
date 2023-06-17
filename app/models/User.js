const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING
  },
  nom: {
    type: Sequelize.STRING
  },
  prenom: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.ENUM('admin', 'gest', 'user')
  },
  notification: {
    type: Sequelize.BOOLEAN
  },
  supprime: {
    type: Sequelize.BOOLEAN
  },
  actif: {
    type: Sequelize.BOOLEAN
  },
});

module.exports = User;