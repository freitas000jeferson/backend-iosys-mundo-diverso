const yup = require('yup');

const create = {
  body: yup.object().shape({
    title: yup.string().default(''),
    description: yup.string().default(''),
    videoLink: yup.string().default(''),
    imageLink: yup.string().default(''),
    isVideo: yup.boolean().default(() => false),
    categoryId: yup.number().integer(),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    videoLink: yup.string(),
    imageLink: yup.string(),
    isVideo: yup.boolean(),
    categoryId: yup.number().integer(),
  }),
};

module.exports.content = {
  create,
  update,
};
