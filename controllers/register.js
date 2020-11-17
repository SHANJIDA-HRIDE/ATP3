var express = require('express');
var db = require('./../models/db.js');
var userModel = require('./../models/register');
var router = express.Router();


router.get('/', function(req, res){
		res.render('register/register');		
});




router.post('/adminreg', function(req, res){
	
	var user = {
		username: req.body.username,
		email: req.body.email,
		phone: req.body.phone,
		password: req.body.password,
		gender: req.body.gender,
		city: req.body.city
		type: req.body.type
		
	}
	

	
	//console.log(user.username, user.email, user.city, user.phone, user.password, user.gender);

	userModel.registeradmin(user, function(status){
		
		if(status){
			res.redirect('/login');
		}else{
			res.redirect('/login');
		}
	});

});

router.post('/memberreg', function(req, res){
	
	var user = {
		username: req.body.username,
		email: req.body.email,
		phone: req.body.phone,
		password: req.body.password,
		gender: req.body.gender,
		city: req.body.city
		type: req.body.type
	}
	

	
	//console.log(user.username, user.email, user.city, user.phone, user.password, user.gender);

	userModel.registermember(user, function(status){
		
		if(status){
			res.redirect('/login');
		}else{
			res.redirect('/login');
		}
	});

});


module.exports = router;
