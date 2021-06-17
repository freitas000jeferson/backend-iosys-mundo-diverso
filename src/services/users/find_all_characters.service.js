const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const { usersRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');
const {
  Character,
  Member,
  Part,
  Category,
  Content,
  Article,
} = require('../../models');

module.exports.findAllCharacters = async (id) => {
  const params = {
    where: { id: { [Op.eq]: id } },
    attributes: [],
    include: [
      {
        model: Character,
        as: 'characters',
        attributes: ['isPublic'],
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
      },
    ],
  };
  const data = await usersRepository.findAll(params);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('user'),
      StatusCodes.NOT_FOUND
    );
  }

  return data;
};
