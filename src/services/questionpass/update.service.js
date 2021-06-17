const { StatusCodes } = require('http-status-codes');

const { questionpassRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await questionpassRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('question-pass'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return questionpassRepository.update(data);
};
