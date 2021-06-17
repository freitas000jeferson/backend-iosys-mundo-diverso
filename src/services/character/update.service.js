const { StatusCodes } = require('http-status-codes');

const { characterRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await characterRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('character'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return characterRepository.update(data);
};
