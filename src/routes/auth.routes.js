const router = require('express').Router();
const { authController, usersController } = require('../controllers');
const { validate, isAuthorizedSingIn } = require('../middlewares');
const {
  validationSchemas: { auth, users },
} = require('../validations');

router.post('/register', validate(users.create), usersController.create);

router.post(
  '/register-admin',
  validate(users.create),
  usersController.createAdmin
);
// router.post(
//   '/forgot-password',
//   validate(auth.forgotPassword),
//   authController.forgotPassword
// );
// router.post(
//   '/:token/reset-password',
//   validate(auth.resetPassword),
//   authController.resetPassword
// );

router.post(
  '/refresh-token',
  validate(auth.refreshToken),
  authController.refreshToken
);
router.use(isAuthorizedSingIn);
router.post('/signin', validate(auth.signin), authController.signin);
module.exports.auth = router;
