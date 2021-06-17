const { Questionpass } = require('../models');

module.exports = {
  list: (query) => Questionpass.findAndCountAll(query),
  getById: (id) => Questionpass.findByPk(id),
  get: (params) => Questionpass.findOne({ where: params }),
  create: (params) => Questionpass.create(params),
  update: (data) => data.save(),
  destroy: (id) => Questionpass.destroy({ where: { id } }),
  findAll: (params) => Questionpass.findAll(params),
};
