const { characterRepository, memberRepository } = require('../../repositories');
const partService = require('../part');

module.exports.createCharacter = async (id, params) => {
  console.log('id do usuario:', id);
  for await (const key of params.members) {
    //   verifica se existe os ids das partes existem
    await partService.get(key);
  }
  //   cria o character
  const character = await characterRepository.create({
    userId: id,
    isPublic: params.isPublic,
  });
  for await (const key of params.members) {
    await memberRepository.create({ characterId: character.id, partId: key });
  }

  return character;
};
