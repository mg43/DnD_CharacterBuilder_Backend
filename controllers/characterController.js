const { async } = require('regenerator-runtime')
const models = require('../models')
const characterController = {}


//new character
characterController.new = async (req, res) => {
    await models.character.create({
      userId: req.body.userId,
      name: req.body.name,
      race: req.body.race,
      speed: req.body.speed,
      size: req.body.size,
      class: req.body.class,
      con: req.body.con,
      str: req.body.str,
      dex: req.body.dex,
      int: req.body.int,
      wis: req.body.wis,
      cha: req.body.cha,
      image: req.body.image

      //need all of the character fields in the body below here

    })
    .then((character) => {
      res.json({ message: 'success', character})
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
      console.log(error)
    })
  }

  //fetch all user characters
  characterController.fetchAll = async (req, res) => {
    models.character.findAll({
        where: { userId: req.params.id}
    }).then((foundcharacter) => {
        res.json(foundcharacter)
    }).catch((error) => {
        res.status(400).json({ error: error.message })
    })
}

  //fetch one of the users characters
  characterController.fetchOne = async (req, res) => {
    models.character.findOne({
        where: { id: req.params.id}
    }).then((foundcharacter) => {
      res.json(foundcharacter)
    }).catch((error) => {
        res.status(400).json({ error: error.message })
    })
}

  //delete character
  characterController.deleteCharacter = async (req, res) => {
    models.character.destroy({
        where: { id: req.params.id}
    }).then((foundcharacter) => {
      res.json(foundcharacter)
    }).catch((error) => {
        res.status(400).json({ error: error.message })
    })
}



module.exports = characterController