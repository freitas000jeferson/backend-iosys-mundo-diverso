const { StatusCodes } = require('http-status-codes');

const { partRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await partRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('part'),
      StatusCodes.NOT_FOUND
    );
  }
  return partRepository.destroy(id);
};
