const express = require('express')
const body_parser = require('body-parser')
const morgan = require('morgan')
const http = require('http')
// var userRoute = require('./routes');
var hostname = 'localhost'
var port = 1917;
var users = {"Data":[]}


var app = express();
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(body_parser.json())
// app.use('/user',userRoute)
app.get('/user',(req,res)=>{
	res.json(users)
})

app.post('/user',(req,res)=>{
	var name = req.body.name
	var id = req.body.id
	var description = req.body.description
	users.Data.push({"name":name,"id":id,"description":description})
	res.end('data has been added')

})

app.get("/user/:id",(req,res)=>{
	res.end('the user id is '+req.params.id)
})


var server = http.createServer(app)


server.listen(port,hostname, (msg)=>{
	console.log('Server Started at http://'+hostname+':'+port)
})



