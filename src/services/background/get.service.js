const { StatusCodes } = require('http-status-codes');

const { backgroundRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await backgroundRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('background'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
