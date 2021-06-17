const yup = require('yup');

const get = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

const listName = {
  query: yup.object().shape({
    name: yup.string().default(''),
    page: yup.number().integer().default(1),
    perPage: yup.number().integer().default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(
        /[:](asc|desc)/i,
        "sorting order must be one of the following: 'asc' or 'desc'"
      ),
  }),
};
const list = {
  query: yup.object().shape({
    page: yup.number().integer().default(1),
    perPage: yup.number().integer().default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(
        /[:](asc|desc)/i,
        "sorting order must be one of the following: 'asc' or 'desc'"
      ),
  }),
};
const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.general = {
  get,
  list,
  listName,
  destroy,
};
