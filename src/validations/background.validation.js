const yup = require('yup');

const create = {
  body: yup.object().shape({
    name: yup.string().default(''),
    backgroundLink: yup.string().default(''),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    name: yup.string(),
    backgroundLink: yup.string(),
  }),
};

module.exports.background = {
  create,
  update,
};
