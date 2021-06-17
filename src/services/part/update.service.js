const { StatusCodes } = require('http-status-codes');

const { partRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await partRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('part'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return partRepository.update(data);
};
