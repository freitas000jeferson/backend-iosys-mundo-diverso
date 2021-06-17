const { StatusCodes } = require('http-status-codes');

const { memberRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const exists = await memberRepository.getById(id);
  if (!exists) {
    throw new ApplicationError(
      messages.notFound('member'),
      StatusCodes.NOT_FOUND
    );
  }
  return memberRepository.destroy(id);
};
