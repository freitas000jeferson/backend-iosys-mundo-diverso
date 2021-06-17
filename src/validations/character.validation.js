const yup = require('yup');

const create = {
  body: yup.object().shape({
    isPublic: yup.boolean().default(() => true),
    userId: yup.number().integer(),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    isPublic: yup.boolean(),
    userId: yup.number().integer(),
  }),
};
const createCharacter = {
  body: yup.object().shape({
    isPublic: yup.boolean().default(() => true),
    members: yup.array().of(yup.number().required()).strict(),
  }),
};

module.exports.character = {
  create,
  update,
  createCharacter,
};
