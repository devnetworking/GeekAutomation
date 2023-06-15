const User = require('../models/User');
const Task = require('../models/Task');

exports.getIndex = async (req, res, next) => {
  if (req.isAuthenticated()) {
    try {
      const tasks = await Task.findAll();
      res.render('home/index', { tasks: tasks });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  } else {
    res.redirect('/login');
  }
};
