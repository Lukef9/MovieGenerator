const authRouter = require('express').Router();
const authController = require('../controllers/auth');

authRouter.route('/login')
  .get(/* show login form */)
  .post(authController.login /* handle user profile *//* handle login error */);

authRouter.route('/register')
  .get(/* show register form */)
  .post(authController.register /* handle user profile *//* handle register error */);

module.exports = authRouter;
