const yup = require('yup');

const create = {
  body: yup.object().shape({
    name: yup.string().default(''),
    articleLink: yup.string().default(''),
    contentId: yup.number().integer(),
  }),
};
const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    name: yup.string(),
    articleLink: yup.string(),
    contentId: yup.number().integer(),
  }),
};

module.exports.article = {
  create,
  update,
};
