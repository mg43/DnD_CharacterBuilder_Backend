const userRoutes = require('express').Router()
const userController = require('../controllers/userController')

// userRoutes.get('/',userController.index)
userRoutes.post('/signup',userController.signUp)
userRoutes.post('/login',userController.login)
userRoutes.get('/:id',userController.checkLogin)


module.exports = userRoutes