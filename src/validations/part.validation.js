const yup = require('yup');

const create = {
  body: yup.object().shape({
    assetLink: yup.string().default(''),
    minAssetLink: yup.string().default(''),
    shapeId: yup.number().integer(),
    colorId: yup.number().integer(),
    categoryId: yup.number().integer(),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    assetLink: yup.string().default(''),
    minAssetLink: yup.string().default(''),
    shapeId: yup.number().integer(),
    colorId: yup.number().integer(),
    categoryId: yup.number().integer(),
  }),
};

module.exports.part = {
  create,
  update,
};
