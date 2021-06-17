const { StatusCodes } = require('http-status-codes');

const { characterRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await characterRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('character'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
