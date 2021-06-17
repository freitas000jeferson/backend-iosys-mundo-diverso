const yup = require('yup');

const create = {
  body: yup.object().shape({
    partId: yup.number().integer(),
    characterId: yup.number().integer(),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    partId: yup.number().integer(),
    characterId: yup.number().integer(),
  }),
};

module.exports.member = {
  create,
  update,
};
