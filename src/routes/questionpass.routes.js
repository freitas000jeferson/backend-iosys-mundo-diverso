const router = require('express').Router();
const { questionpassController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { general, questionpass },
} = require('../validations');

router.get('/', validate(general.listName), questionpassController.list);
router.get('/:id', validate(general.get), questionpassController.get);

router.use(isAuthorizedAdmin);
router.post('/', validate(questionpass.create), questionpassController.create);
router.put(
  '/:id',
  validate(questionpass.update),
  questionpassController.update
);
router.delete(
  '/:id',
  validate(general.destroy),
  questionpassController.destroy
);

module.exports.questionpass = router;
