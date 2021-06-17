const yup = require('yup');

const create = {
  body: yup.object().shape({
    name: yup.string().default(''),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    name: yup.string(),
  }),
};

module.exports.category = {
  create,
  update,
};
