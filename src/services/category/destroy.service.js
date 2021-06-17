const { StatusCodes } = require('http-status-codes');

const { categoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await categoryRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('category'),
      StatusCodes.NOT_FOUND
    );
  }
  return categoryRepository.destroy(id);
};
