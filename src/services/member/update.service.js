const { StatusCodes } = require('http-status-codes');

const { memberRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await memberRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('member'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return memberRepository.update(data);
};
