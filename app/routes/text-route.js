const express = require("express")
const router = express.Router()


 router.get('/', (req,res,next) =>{
	res.status(200).send({
		title: "diary-user"
    })
	next()
})

 module.exports = router