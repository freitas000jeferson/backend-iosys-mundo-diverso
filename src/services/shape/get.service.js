const { StatusCodes } = require('http-status-codes');

const { shapeRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const data = await shapeRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('shape'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
