const { StatusCodes } = require('http-status-codes');

const { contentRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await contentRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('content'),
      StatusCodes.NOT_FOUND
    );
  }
  return contentRepository.destroy(id);
};
