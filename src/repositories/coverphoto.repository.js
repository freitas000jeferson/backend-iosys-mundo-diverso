const { Coverphoto } = require('../models');

module.exports = {
  list: (query) => Coverphoto.findAndCountAll(query),
  getById: (id) => Coverphoto.findByPk(id),
  get: (params) => Coverphoto.findOne({ where: params }),
  create: (params) => Coverphoto.create(params),
  update: (data) => data.save(),
  destroy: (id) => Coverphoto.destroy({ where: { id } }),
};
