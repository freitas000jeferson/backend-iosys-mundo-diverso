const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');
const { categoryService } = require('../services');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy, name } = req.query;
    const response = await categoryService.list({
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
    const response = await categoryService.get(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;
    const response = await categoryService.create(body);
    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const response = await categoryService.update(id, body);
    return res.status(StatusCodes.OK).json(response);
  }),

  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;
    await categoryService.destroy(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
