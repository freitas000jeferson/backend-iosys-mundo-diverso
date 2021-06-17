const { categoryRepository } = require('../../repositories');
const { queryHelper, queryName } = require('../../helpers');

module.exports.list = async (options) => {
  const query = queryHelper(options);
  query.where = queryName(options);
  const { count, rows } = await categoryRepository.list(query);
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
