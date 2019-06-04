const express = require("express")
const router = express.Router()
const controller = require("../controllers/diary-controller")
const generateSchema = require("generate-schema") 

 router.post('/', controller.post)

 router.put('/:id', controller.put)

 router.delete('/', controller.delete)



module.exports = router 