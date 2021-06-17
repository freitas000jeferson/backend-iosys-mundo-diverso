const router = require('express').Router();
const { categoryController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { general, category },
} = require('../validations');

router.get('/', validate(general.listName), categoryController.list);
router.get('/:id', validate(general.get), categoryController.get);

router.use(isAuthorizedAdmin);
router.post('/', validate(category.create), categoryController.create);
router.put('/:id', validate(category.update), categoryController.update);
router.delete('/:id', validate(general.destroy), categoryController.destroy);

module.exports.categories = router;
