// const { StatusCodes } = require('http-status-codes');

const { characterRepository } = require('../../repositories');
// const { ApplicationError } = require('../../utils');
// const { messages } = require('../../helpers');

module.exports.create = async (params) =>
  // const exists = await characterRepository.get({
  //   name: params.photoLink,
  // });
  // if (exists) {
  //   throw new ApplicationError(
  //     messages.alreadyExists('character'),
  //     StatusCodes.CONFLICT
  //   );
  // }

  characterRepository.create(params);
