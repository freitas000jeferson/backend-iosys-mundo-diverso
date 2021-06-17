const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { shapeService } = require('../services');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy, name } = req.query;
    const response = await shapeService.list({
      page,
      perPage,
      sortBy,
      name,
    });
    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }
    return res.status(StatusCodes.OK).json(response);
  }),

  get: catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await shapeService.get(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;
    const response = await shapeService.create(body);
    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await shapeService.update(id, body);
    return res.status(StatusCodes.OK).json(response);
  }),

  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;
    await shapeService.destroy(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),

  findAll: catchAsync(async (req, res) => {
    const response = await shapeService.findAll();
    return res.status(StatusCodes.OK).json(response);
  }),
};
