const { StatusCodes } = require('http-status-codes');

const { categoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const exists = await categoryRepository.get({
    name: params.name,
  });
  if (exists) {
    throw new ApplicationError(
      messages.alreadyExists('category'),
      StatusCodes.CONFLICT
    );
  }

  return categoryRepository.create(params);
};
