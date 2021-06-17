const { StatusCodes } = require('http-status-codes');

const { articleRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await articleRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('article'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
