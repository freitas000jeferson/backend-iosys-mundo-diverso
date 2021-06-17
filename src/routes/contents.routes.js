const router = require('express').Router();
const { contentController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { general, content },
} = require('../validations');

router.get('/', validate(general.list), contentController.findAll);

router.get('/search', validate(general.list), contentController.list);
router.get('/:id', validate(general.get), contentController.get);

router.use(isAuthorizedAdmin);
router.post('/', validate(content.create), contentController.create);
router.put('/:id', validate(content.update), contentController.update);
router.delete('/:id', validate(general.destroy), contentController.destroy);

module.exports.contents = router;
