const router = require('express').Router();
const { backgroundController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { general, background },
} = require('../validations');

router.get('/', validate(general.listName), backgroundController.list);
router.get('/:id', validate(general.get), backgroundController.get);

router.use(isAuthorizedAdmin);
router.post('/', validate(background.create), backgroundController.create);
router.put('/:id', validate(background.update), backgroundController.update);
router.delete('/:id', validate(general.destroy), backgroundController.destroy);

module.exports.backgrounds = router;
