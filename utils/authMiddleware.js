// utils/authMiddleware.js
module.exports = (req, res, next) => {
    // If the user is logged in (i.e., their user ID is saved in the session), allow them to proceed
    if (req.session.userId) {
      next();
    } else {
      // If the user is not logged in, redirect them to the login page
      res.redirect('/login');
    }
  };
  