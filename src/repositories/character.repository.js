const { Character } = require('../models');

module.exports = {
  list: (query) => Character.findAndCountAll(query),
  getById: (id) => Character.findByPk(id),
  get: (params) => Character.findOne({ where: params }),
  create: (params) => Character.create(params),
  update: (data) => data.save(),
  destroy: (id) => Character.destroy({ where: { id } }),
  findOne: (params) => Character.findOne(params),
};
