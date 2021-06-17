const { StatusCodes } = require('http-status-codes');

const { coverphotoRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await coverphotoRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('coverphoto'),
      StatusCodes.NOT_FOUND
    );
  }
  return coverphotoRepository.destroy(id);
};
