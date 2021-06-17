const { general } = require('./general.validation');
const { users } = require('./users.validation');
const { auth } = require('./auth.validation');
const { admin } = require('./admin.validation');
const { category } = require('./category.validation');
const { background } = require('./background.validation');
const { color } = require('./color.validation');
const { coverphoto } = require('./coverphoto.validation');
const { shape } = require('./shape.validation');
const { article } = require('./article.validation');
const { character } = require('./character.validation');
const { content } = require('./content.validation');
const { member } = require('./member.validation');
const { part } = require('./part.validation');
const { questionpass } = require('./questionpass.validation');

module.exports.validationSchemas = {
  general,
  users,
  auth,
  admin,
  background,
  category,
  color,
  coverphoto,
  shape,
  article,
  character,
  content,
  member,
  part,
  questionpass,
};
