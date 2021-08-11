const express = require("express")
const router = express.Router()
const userController = require("./../controllers/userController")

router.post('/userData', userController.getCustomerData)

module.exports = router