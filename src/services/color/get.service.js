const { StatusCodes } = require('http-status-codes');

const { colorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await colorRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('color'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
