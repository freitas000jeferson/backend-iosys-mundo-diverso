const { StatusCodes } = require('http-status-codes');

const { contentRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await contentRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('content'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return contentRepository.update(data);
};
