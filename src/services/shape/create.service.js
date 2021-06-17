const { StatusCodes } = require('http-status-codes');

const { shapeRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const exists = await shapeRepository.get({
    name: params.name,
  });
  if (exists) {
    throw new ApplicationError(
      messages.alreadyExists('shape'),
      StatusCodes.CONFLICT
    );
  }

  return shapeRepository.create(params);
};
