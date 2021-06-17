const { StatusCodes } = require('http-status-codes');

const { questionpassRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await questionpassRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('question-pass'),
      StatusCodes.NOT_FOUND
    );
  }
  return questionpassRepository.destroy(id);
};
