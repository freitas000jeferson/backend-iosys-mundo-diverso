const { Member } = require('../models');

module.exports = {
  list: (query) => Member.findAndCountAll(query),
  getById: (id) => Member.findByPk(id),
  get: (params) => Member.findOne({ where: params }),
  create: (params) => Member.create(params),
  update: (data) => data.save(),
  destroy: (id) => Member.destroy({ where: { id } }),
  findOne: (params) => Member.findOne(params),
};
