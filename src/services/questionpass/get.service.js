const { StatusCodes } = require('http-status-codes');

const { questionpassRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await questionpassRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('question-pass'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
