const { Article } = require('../models');

module.exports = {
  list: (query) => Article.findAndCountAll(query),
  getById: (id) => Article.findByPk(id),
  get: (params) => Article.findOne({ where: params }),
  create: (params) => Article.create(params),
  update: (data) => data.save(),
  destroy: (id) => Article.destroy({ where: { id } }),
};
