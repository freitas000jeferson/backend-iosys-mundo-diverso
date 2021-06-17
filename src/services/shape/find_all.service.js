const { StatusCodes } = require('http-status-codes');

const { shapeRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');
const { Category, Color, Part } = require('../../models');

module.exports.findAll = async () => {
  const params = {
    include: [
      {
        model: Part,
        as: 'parts',
        attributes: {},
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
        ],
      },
    ],
  };
  const data = await shapeRepository.findAll(params);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('part'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
