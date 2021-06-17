const router = require('express').Router();
const { colorController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { general, color },
} = require('../validations');

router.get('/', validate(general.listName), colorController.list);
router.get('/:id', validate(general.get), colorController.get);

router.use(isAuthorizedAdmin);
router.post('/', validate(color.create), colorController.create);
router.put('/:id', validate(color.update), colorController.update);
router.delete('/:id', validate(general.destroy), colorController.destroy);

module.exports.colors = router;
