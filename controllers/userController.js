const { async } = require('regenerator-runtime')
const models = require('../models')
const userController = {}


//signup
userController.signUp = async (req, res) => {
    await models.user.create({
      email: req.body.email,
      password: req.body.password
    })
    .then((user) => {
      res.json({ message: 'success', user})
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
      console.log(error)
    })
  }

  //login
  userController.login = async (req, res) => {
    models.user.findOne({
        where: { email: req.body.email }
    }).then((foundUser) => {
        if (foundUser && foundUser.password === req.body.password) {
        res.json({ message: 'success', user: foundUser })
        } else {
        res.status(401).json({ message: 'login failed' })
        }
    }).catch((error) => {
        res.status(400).json({ error: error.message })
    })
}

  //check login
  userController.checkLogin = async (req, res) => {
    models.user.findOne({
        where: { id: req.params.id }
    }).then((foundUser) => {
        res.json(foundUser)
    }).catch((error) => {
        res.status(400).json({ error: error.message })
    })
}

module.exports = userController