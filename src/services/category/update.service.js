const { StatusCodes } = require('http-status-codes');

const { categoryRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await categoryRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('category'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return categoryRepository.update(data);
};
