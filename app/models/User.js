const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('User', {

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
User.sync();

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync('123', salt);

User.create({
  name: 'Default User',
  email: 'admin@geekautomation.com',
  password: hashedPassword
}).then(() => {
  console.log('Default user created');
}).catch((err) => {
  console.error('Failed to create default user', err);
});