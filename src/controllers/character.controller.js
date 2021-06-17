const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { characterService } = require('../services');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const response = await characterService.list({
      page,
      perPage,
      sortBy,
    });
    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }
    return res.status(StatusCodes.OK).json(response);
  }),

  get: catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await characterService.get(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;
    const response = await characterService.create(body);
    return res.status(StatusCodes.CREATED).json(response);
  }),
  createCharacter: catchAsync(async (req, res) => {
    const {
      body,
      session: { id },
    } = req;
    const response = await characterService.createCharacter(id, body);
    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await characterService.update(id, body);
    return res.status(StatusCodes.OK).json(response);
  }),

  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;
    await characterService.destroy(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
