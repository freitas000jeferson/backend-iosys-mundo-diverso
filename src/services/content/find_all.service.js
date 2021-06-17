const { contentRepository } = require('../../repositories');
const { Category, Article } = require('../../models');
const { queryHelper } = require('../../helpers');

module.exports.findAll = async (options) => {
  const query = queryHelper(options);
  const params = {
    include: [
      {
        model: Article,
        as: 'articles',
        attributes: ['name', 'articleLink'],
        include: [],
      },
      {
        model: Category,
        as: 'categorys',
        attributes: ['name'],
        include: [],
      },
    ],
  };
  query.include = params.include;
  const { count, rows } = await contentRepository.list(query);
  const totalPages = Math.ceil(count / options.perPage);

  return {
    metadata: {
      total: count,
      totalPages,
      ...(options.page > 1 && { previousPage: options.page - 1 }),
      ...(options.page < count &&
        options.page < totalPages && { nextPage: options.page + 1 }),
    },
    data: rows,
  };
};
