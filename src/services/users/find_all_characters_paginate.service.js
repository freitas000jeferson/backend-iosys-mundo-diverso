const { Op } = require('sequelize');
const { characterRepository } = require('../../repositories');
const { Member, Part, Category, Content, Article } = require('../../models');
const { queryHelper } = require('../../helpers');

module.exports.findAllCharactersPaginate = async (id, options) => {
  const params = {
    where: { userId: { [Op.eq]: id } },
    include: [
      {
        model: Member,
        as: 'members',
        // attributes: [],
        include: [
          {
            model: Part,
            as: 'parts',
            attributes: [
              'assetLink',
              'minAssetLink',
              'shapeId',
              'colorId',
              'categoryId',
            ],
            include: [
              {
                model: Category,
                as: 'categorys',
                attributes: ['name'],
                include: [
                  {
                    model: Content,
                    as: 'contents',
                    attributes: [
                      'title',
                      'description',
                      'videoLink',
                      'imageLink',
                      'isVideo',
                    ],
                    include: [
                      {
                        model: Article,
                        as: 'articles',
                        attributes: ['name', 'articleLink'],
                        include: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const query = queryHelper(options);
  query.include = params.include;
  query.where = params.where;

  const { count, rows } = await characterRepository.list(query);
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
