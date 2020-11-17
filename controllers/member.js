var express = require('express');

var userModel = require('./../models/member');




var router = express.Router();

//Admin 
router.get('/memberprofile', function(req, res){

	userModel.getprofile(function(results){

		res.render('member/profile', {user: results});		
	});

});
router.get('/memberupdate/:id', function(req, res){

	userModel.getupdatemember(req.params.id, function(results){
		res.render('member/updateprofile', {user: results});		
	});

});

router.post('/memberupdate/:id', function(req, res){
	
	var user = {
		username: req.body.username,
		phone: req.body.phone,
		password: req.body.password,
		email: req.body.email,
		gender: req.body.gender,
		city: req.body.city,
		id: req.params.id
	};
	userModel.updatemember(user, function(status){
		console.log(status);
		if(status){
			res.redirect('/member/memberprofile');
		}else{
			res.redirect('/memberhome');
		}
	});
});


module.exports = router;
