const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { partService } = require('../services');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const response = await partService.list({
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
    const response = await partService.get(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  findAll: catchAsync(async (req, res) => {
    const response = await partService.findAll();
    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;
    const response = await partService.create(body);
    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await partService.update(id, body);
    return res.status(StatusCodes.OK).json(response);
  }),

  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;
    await partService.destroy(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
