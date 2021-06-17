const { StatusCodes } = require('http-status-codes');

const { characterRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');
const {
  Member,
  Part,
  Color,
  Shape,
  Category,
  Content,
  Article,
} = require('../../models');

module.exports.findOneCharacters = async (id) => {
  const params = {
    where: { id },
    include: [
      {
        model: Member,
        as: 'members',
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
                model: Color,
                as: 'colors',
                attributes: ['id', 'name'],
                include: [],
              },
              {
                model: Shape,
                as: 'shapes',
                attributes: ['id', 'name'],
                include: [],
              },
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
  const data = await characterRepository.findOne(params);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('user'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
