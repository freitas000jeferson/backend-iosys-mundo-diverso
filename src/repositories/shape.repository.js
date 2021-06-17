const { Shape } = require('../models');

module.exports = {
  list: (query) => Shape.findAndCountAll(query),
  getById: (id) => Shape.findByPk(id),
  get: (params) => Shape.findOne({ where: params }),
  create: (params) => Shape.create(params),
  update: (data) => data.save(),
  destroy: (id) => Shape.destroy({ where: { id } }),
  findAll: (params) => Shape.findAll(params),
};
