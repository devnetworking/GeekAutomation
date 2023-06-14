const User = require('../models/User');

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.render('user/profile', { user: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
