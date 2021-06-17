const { Category } = require('../models');

module.exports = {
  list: (query) => Category.findAndCountAll(query),
  getById: (id) => Category.findByPk(id),
  get: (params) => Category.findOne({ where: params }),
  create: (params) => Category.create(params),
  update: (data) => data.save(),
  destroy: (id) => Category.destroy({ where: { id } }),
};
