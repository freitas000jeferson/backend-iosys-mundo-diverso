const { StatusCodes } = require('http-status-codes');

const { articleRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await articleRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('article'),
      StatusCodes.NOT_FOUND
    );
  }
  return articleRepository.destroy(id);
};
