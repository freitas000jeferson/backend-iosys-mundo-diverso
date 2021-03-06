const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { authService } = require('../services');

module.exports = {
  signin: catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const { isMobile } = req.session;
    const response = await authService.signin(email, password, isMobile);
    return res.status(StatusCodes.OK).json(response);
  }),

  refreshToken: catchAsync(async (req, res) => {
    const { token, refreshToken } = req.body;
    const response = await authService.refreshToken(token, refreshToken);
    return res.status(201).json(response);
  }),

  forgotPassword: catchAsync(async (req, res) => {
    const { email } = req.body;
    await authService.forgotPassword(email);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),

  resetPassword: catchAsync(async (req, res) => {
    const {
      params: { token },
      body: { newPassword },
    } = req;
    await authService.resetPassword(token, newPassword);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
