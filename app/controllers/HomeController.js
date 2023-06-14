const User = require('../models/User');
const Task = require('../models/Task');

exports.getIndex = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.render('home/index', { tasks: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
