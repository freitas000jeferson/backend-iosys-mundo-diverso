const yup = require('yup');

const create = {
  body: yup.object().shape({
    question: yup.string().default(''),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    question: yup.string(),
  }),
};

module.exports.questionpass = {
  create,
  update,
};
