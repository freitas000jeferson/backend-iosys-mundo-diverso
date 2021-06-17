const router = require('express').Router();
const { memberController } = require('../controllers');
const { validate, isAuthorized } = require('../middlewares');
const {
  validationSchemas: { general, member },
} = require('../validations');

router.get('/', validate(general.list), memberController.list);
router.get('/:id', validate(general.get), memberController.get);

router.use(isAuthorized);
router.post('/', validate(member.create), memberController.create);
router.put('/:id', validate(member.update), memberController.update);
router.delete('/:id', validate(general.destroy), memberController.destroy);

module.exports.members = router;
