const { StatusCodes } = require('http-status-codes');

const { partRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const exists = await partRepository.get({
    assetLink: params.assetLink,
  });
  if (exists) {
    throw new ApplicationError(
      messages.alreadyExists('part'),
      StatusCodes.CONFLICT
    );
  }

  return partRepository.create(params);
};
