const { StatusCodes } = require('http-status-codes');

const { questionpassRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const exists = await questionpassRepository.get({
    question: params.question,
  });
  if (exists) {
    throw new ApplicationError(
      messages.alreadyExists('question-pass'),
      StatusCodes.CONFLICT
    );
  }

  return questionpassRepository.create(params);
};
