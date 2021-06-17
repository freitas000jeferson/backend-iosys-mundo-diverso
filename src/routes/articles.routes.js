const router = require('express').Router();
const { articleController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { general, article },
} = require('../validations');

router.get('/', validate(general.list), articleController.list);
router.get('/:id', validate(general.get), articleController.get);

router.use(isAuthorizedAdmin);
router.post('/', validate(article.create), articleController.create);
router.put('/:id', validate(article.update), articleController.update);
router.delete('/:id', validate(general.destroy), articleController.destroy);

module.exports.articles = router;
