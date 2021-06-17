// const { StatusCodes } = require('http-status-codes');

const { contentRepository } = require('../../repositories');
// const { ApplicationError } = require('../../utils');
// const { messages } = require('../../helpers');

module.exports.create = async (params) =>
  // const exists = await contentRepository.get({
  //   name: params.photoLink,
  // });
  // if (exists) {
  //   throw new ApplicationError(
  //     messages.alreadyExists('content'),
  //     StatusCodes.CONFLICT
  //   );
  // }

  contentRepository.create(params);
