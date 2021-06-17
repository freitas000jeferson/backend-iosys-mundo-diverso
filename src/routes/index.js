const { users } = require('./users.routes');
const { auth } = require('./auth.routes');
const { articles } = require('./articles.routes');
const { backgrounds } = require('./backgrounds.routes');
const { categories } = require('./categories.routes');
const { characters } = require('./characters.routes');
const { colors } = require('./colors.routes');
const { contents } = require('./contents.routes');
const { coverphotos } = require('./coverphotos.routes');
const { members } = require('./members.routes');
const { parts } = require('./parts.routes');
const { shapes } = require('./shapes.routes');
const { questionpass } = require('./questionpass.routes');

module.exports = {
  users,
  auth,
  articles,
  backgrounds,
  categories,
  characters,
  colors,
  contents,
  coverphotos,
  members,
  parts,
  shapes,
  questionpass,
};
