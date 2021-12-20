const characterRoutes = require('express').Router()
const characterController = require('../controllers/characterController')

// characterRoutes.get('/',characterController.index)
characterRoutes.get('/fetch/:id',characterController.fetchAll)
characterRoutes.post('/new',characterController.new)
characterRoutes.get('/:id',characterController.fetchOne)
characterRoutes.delete('/:id',characterController.deleteCharacter)


module.exports = characterRoutes