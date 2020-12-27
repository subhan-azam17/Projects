const express = require('express')

var userRoute = express.Router();

var users = {"Data":[{}]}


userRoute.route('/')
	.get((req,res)=>{
		res.end('This will show all users')
	})
	.post((req,res)=>{
		users.Data.push(req.body)
		res.end('This will add new users with username: '+ users.Data[req.body.id].name)
	})
	.put((req,res)=>{
		res.end('Put request is forbidden')
	})
	.delete((req,res)=>{
		res.end('Delete request is forbidden')
});
userRoute.route('/:userId')
	.get((req,res)=>{
		res.end('This will show details of user with userid: '+req.params.userId)
	})
	.post((req,res)=>{
		res.end('Post request is forbidden')
	})
	.put((req,res)=>{
		res.end('This will update details of user with userid: '
			+req.params.userId + 
			'with name: '
			+ req.body.name + 
			' and having description: '+ req.body.description)
	})
	.delete((req,res)=>{
		res.end('This will delete user with userid: '+req.params.userId)
});

module.exports = userRoute;