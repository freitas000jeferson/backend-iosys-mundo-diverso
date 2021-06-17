const { Content } = require('../models');

module.exports = {
  list: (query) => Content.findAndCountAll(query),
  getById: (id) => Content.findByPk(id),
  get: (params) => Content.findOne({ where: params }),

  create: (params) => Content.create(params),
  update: (data) => data.save(),
  destroy: (id) => Content.destroy({ where: { id } }),
  find: (params) => Content.findOne(params),
};
