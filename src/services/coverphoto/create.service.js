const { StatusCodes } = require('http-status-codes');

const { coverphotoRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const exists = await coverphotoRepository.get({
    photoLink: params.photoLink,
  });
  if (exists) {
    throw new ApplicationError(
      messages.alreadyExists('coverphoto'),
      StatusCodes.CONFLICT
    );
  }

  return coverphotoRepository.create(params);
};
