const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const route = require("./routes/diary-route")
const ini = require("./routes/index-route")


//Config
	//Body-Parser
	app.use(bodyParser.urlencoded({extended: false}))
	app.use(bodyParser.json())

//Rotas
	app.use('/', ini)
	app.use('/products', route)


const PORT = normalizePort(process.env.PORT || '8070')
app.listen(PORT, function(){
	console.log("Servidor rodando na url http://localhost:8067")
})

//normalizar a porta de escuta
function normalizePort(val) {
	const port = parseInt(val,10)

	if(isNaN(port)) {
		return val
	}

	if (port >= 0) {
		return port
	}

	return false
} 