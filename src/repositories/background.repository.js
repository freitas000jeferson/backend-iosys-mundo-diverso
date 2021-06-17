const { Background } = require('../models');

module.exports = {
  list: (query) => Background.findAndCountAll(query),
  getById: (id) => Background.findByPk(id),
  get: (params) => Background.findOne({ where: params }),
  create: (params) => Background.create(params),
  update: (data) => data.save(),
  destroy: (id) => Background.destroy({ where: { id } }),
};
