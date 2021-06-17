// const { StatusCodes } = require('http-status-codes');

const { memberRepository } = require('../../repositories');
// const { ApplicationError } = require('../../utils');
// const { messages } = require('../../helpers');

module.exports.create = async (params) =>
  // const exists = await memberRepository.get({
  //   name: params.photoLink,
  // });
  // if (exists) {
  //   throw new ApplicationError(
  //     messages.alreadyExists('member'),
  //     StatusCodes.CONFLICT
  //   );
  // }

  memberRepository.create(params);
