const express = require("express")
const router = express.Router()
const customerController = require("./../controllers/customerController")

router.get('/count', customerController.getTotalCustomerData)
router.get('/customerdata', customerController.getCustomerData)
router.get('/customerdata/:id', customerController.getCustomerDataById)
router.post('/customerdata', customerController.postCustomerData)
router.put('/customerdata/edit/:id', customerController.editCustomerDataById)
router.delete('/customerdata/delete/:id', customerController.deleteCustomerDataById)

module.exports = router