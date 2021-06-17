const { StatusCodes } = require('http-status-codes');

const { contentRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await contentRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('content'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
