const { StatusCodes } = require('http-status-codes');

const { articleRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const exists = await articleRepository.get({
    articleLink: params.articleLink,
  });
  if (exists) {
    throw new ApplicationError(
      messages.alreadyExists('article'),
      StatusCodes.CONFLICT
    );
  }

  return articleRepository.create(params);
};
