const { StatusCodes } = require('http-status-codes');

const { coverphotoRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await coverphotoRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('coverphoto'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
