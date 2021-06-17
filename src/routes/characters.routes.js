const router = require('express').Router();
const { characterController } = require('../controllers');
const { validate, isAuthorized } = require('../middlewares');
const {
  validationSchemas: { general, character },
} = require('../validations');

router.get('/', validate(general.list), characterController.list);
router.get('/:id', validate(general.get), characterController.get);

router.use(isAuthorized);

router.post(
  '/',
  validate(character.createCharacter),
  characterController.createCharacter
);
router.put('/:id', validate(character.update), characterController.update);
router.delete('/:id', validate(general.destroy), characterController.destroy);

module.exports.characters = router;
