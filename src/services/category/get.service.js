const { StatusCodes } = require('http-status-codes');

const { categoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await categoryRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('category'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
