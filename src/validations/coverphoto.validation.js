const yup = require('yup');

const create = {
  body: yup.object().shape({
    photoLink: yup.string().default(''),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    photoLink: yup.string(),
  }),
};

module.exports.coverphoto = {
  create,
  update,
};
