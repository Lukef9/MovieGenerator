const userRouter = require('express').Router();
const authController = require('../controllers/auth');

userRouter.route('/profile')
  .get(authController.loginRequired /* user's profile which will be handled in react */)
  .delete(authController.logout);

module.exports = userRouter;
