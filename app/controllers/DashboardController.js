const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  // Retrieve user from the database
  const user = await User.findOne({ where: { email: req.body.email } });
  
  // Check if the user exists and the password is correct
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    req.session.userId = user.id;
    
    // Redirect to the dashboard
    res.redirect('/dashboard');
  } else {
    // If login fails, send back to the login page with an error message
    res.render('login', { errorMessage: 'Invalid email or password' });
  }
};

exports.showDashboard = async (req, res) => {
    const user = await User.findByPk(req.session.userId);
    res.render('home/index', { user });
  };
  