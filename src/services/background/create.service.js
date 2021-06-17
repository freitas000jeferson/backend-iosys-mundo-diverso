const { StatusCodes } = require('http-status-codes');

const { backgroundRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const exists = await backgroundRepository.get({
    name: params.name,
  });
  if (exists) {
    throw new ApplicationError(
      messages.alreadyExists('background'),
      StatusCodes.CONFLICT
    );
  }

  return backgroundRepository.create(params);
};
