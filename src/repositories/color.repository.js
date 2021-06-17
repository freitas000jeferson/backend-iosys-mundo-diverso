const { Color } = require('../models');

module.exports = {
  list: (query) => Color.findAndCountAll(query),
  getById: (id) => Color.findByPk(id),
  get: (params) => Color.findOne({ where: params }),
  create: (params) => Color.create(params),
  update: (data) => data.save(),
  destroy: (id) => Color.destroy({ where: { id } }),
};
