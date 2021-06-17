const { StatusCodes } = require('http-status-codes');

const { shapeRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await shapeRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('shape'),
      StatusCodes.NOT_FOUND
    );
  }
  return shapeRepository.destroy(id);
};
