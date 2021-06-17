const { StatusCodes } = require('http-status-codes');
const dotenv = require('dotenv');
const path = require('path');
const { catchAsync, ApplicationError } = require('../utils');
const { messages } = require('../helpers');

module.exports = catchAsync(async (req, res, next) => {
  let token;
  let isMobile;

  if (req.headers && req.headers.authorization) {
    const [scheme, credentials] = req.headers.authorization.split(' ');

    if (scheme.match(/^Basic$/i)) {
      token = credentials;
    } else {
      throw new ApplicationError(
        messages.invalidAuthFormat,
        StatusCodes.UNAUTHORIZED
      );
    }
  } else {
    throw new ApplicationError(messages.authMissing, StatusCodes.UNAUTHORIZED);
  }

  dotenv.config({ path: path.join(__dirname, '../../../.env') });

  const base64 = Buffer.from(token, 'base64').toString('ascii');
  const [clientId, clientSecret] = base64.split(':');

  if (clientSecret === process.env.CLIENT_SECRET) {
    if (clientId === process.env.CLIENT_ID_MOBILE) {
      isMobile = true;
    } else if (clientId === process.env.CLIENT_ID_WEB) {
      isMobile = false;
    } else {
      //   error
      throw new ApplicationError(
        messages.authMissing,
        StatusCodes.UNAUTHORIZED
      );
    }
  } else {
    //   error
    throw new ApplicationError(messages.authMissing, StatusCodes.UNAUTHORIZED);
  }

  req.session = { token, isMobile };

  next();
});
