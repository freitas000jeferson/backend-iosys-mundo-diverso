const { StatusCodes } = require('http-status-codes');

const { partRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');
const { Category, Color, Shape } = require('../../models');

module.exports.findAll = async () => {
  const params = {
    include: [
      {
        model: Category,
        as: 'categorys',
        attributes: ['id', 'name'],
        include: [],
      },
      {
        model: Color,
        as: 'colors',
        attributes: ['id', 'name'],
        include: [],
      },
      {
        model: Shape,
        as: 'shapes',
        attributes: ['id', 'name'],
        include: [],
      },
    ],
  };
  const data = await partRepository.findAll(params);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('part'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
