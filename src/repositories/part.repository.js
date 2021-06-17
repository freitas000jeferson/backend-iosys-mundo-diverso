const { Part } = require('../models');

module.exports = {
  list: (query) => Part.findAndCountAll(query),
  getById: (id) => Part.findByPk(id),
  get: (params) => Part.findOne({ where: params }),
  findAll: (params) => Part.findAll(params),
  create: (params) => Part.create(params),
  update: (data) => data.save(),
  destroy: (id) => Part.destroy({ where: { id } }),
};
