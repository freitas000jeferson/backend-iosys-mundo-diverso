const { StatusCodes } = require('http-status-codes');

const { characterRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await characterRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('character'),
      StatusCodes.NOT_FOUND
    );
  }
  return characterRepository.destroy(id);
};
