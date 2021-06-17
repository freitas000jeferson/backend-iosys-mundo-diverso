const { StatusCodes } = require('http-status-codes');

const { partRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await partRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('part'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
