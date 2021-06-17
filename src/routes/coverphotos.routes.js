const router = require('express').Router();
const { coverphotoController } = require('../controllers');
const { validate, isAuthorized } = require('../middlewares');
const {
  validationSchemas: { general, coverphoto },
} = require('../validations');

router.get('/', validate(general.listName), coverphotoController.list);
router.get('/:id', validate(general.get), coverphotoController.get);

router.use(isAuthorized);
router.post('/', validate(coverphoto.create), coverphotoController.create);
router.put('/:id', validate(coverphoto.update), coverphotoController.update);
router.delete('/:id', validate(general.destroy), coverphotoController.destroy);

module.exports.coverphotos = router;
