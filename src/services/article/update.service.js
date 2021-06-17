const { StatusCodes } = require('http-status-codes');

const { articleRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await articleRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('article'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return articleRepository.update(data);
};
