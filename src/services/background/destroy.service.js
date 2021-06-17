const { StatusCodes } = require('http-status-codes');

const { backgroundRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await backgroundRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('background'),
      StatusCodes.NOT_FOUND
    );
  }
  return backgroundRepository.destroy(id);
};
