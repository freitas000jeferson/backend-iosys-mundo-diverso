const { StatusCodes } = require('http-status-codes');

const { usersRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.updatePassword = async (
  email,
  answer,
  newPassword,
  questionpassId
) => {
  const user = await usersRepository.get({ email });
  if (!user) {
    throw new ApplicationError(
      messages.notFound('users'),
      StatusCodes.NOT_FOUND
    );
  }
  if (user.dataValues.questionpassId !== questionpassId) {
    throw new ApplicationError(
      messages.notFound('users'),
      StatusCodes.NOT_FOUND
    );
  }
  if (user.dataValues.answer.toUpperCase() !== answer.toUpperCase()) {
    throw new ApplicationError(
      messages.notFound('users'),
      StatusCodes.NOT_FOUND
    );
  }
  Object.assign(user, { password: newPassword });

  return usersRepository.update(user);
};
