const router = require('express').Router();
const { partController } = require('../controllers');
const { validate, isAuthorized } = require('../middlewares');
const {
  validationSchemas: { general, part },
} = require('../validations');

router.get('/', partController.findAll);
router.get('/search', validate(general.list), partController.list);
router.get('/:id', validate(general.get), partController.get);

router.use(isAuthorized);
router.post('/', validate(part.create), partController.create);
router.put('/:id', validate(part.update), partController.update);
router.delete('/:id', validate(general.destroy), partController.destroy);

module.exports.parts = router;
