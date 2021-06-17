const { StatusCodes } = require('http-status-codes');

const { shapeRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await shapeRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('shape'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return shapeRepository.update(data);
};
