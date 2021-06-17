const { StatusCodes } = require('http-status-codes');

const { colorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const exists = await colorRepository.get({
    name: params.name,
  });
  if (exists) {
    throw new ApplicationError(
      messages.alreadyExists('color'),
      StatusCodes.CONFLICT
    );
  }

  return colorRepository.create(params);
};
