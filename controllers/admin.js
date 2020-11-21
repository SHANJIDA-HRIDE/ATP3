var express = require('express');

var userModel = require('./../models/admin');




var router = express.Router();

//Admin 
router.get('/profile', function(req, res){

	userModel.getprofile(function(results){

		res.render('admin/profile', {user: results});		
	});

});
router.get('/updateadmin/:id', function(req, res){

	userModel.getupdateadmin(req.params.id, function(results){
		res.render('admin/updateprofile', {user: results});		
	});

});

router.post('/updateadmin/:id', function(req, res){
	
	var user = {
		username: req.body.username,
		phone: req.body.phone,
		password: req.body.password,
		email: req.body.email,
		gender: req.body.gender,
		city: req.body.city,
		id: req.params.id
	};
	userModel.updateadmin(user, function(status){
		console.log(status);
		if(status){
			res.redirect('/admin/profile');
		}else{
			res.redirect('/adminhome');
		}
	});
});


router.get('/member', function(req, res){

		userModel.getmember(function(results){
			
				res.render('admin/member', {user: results});
			
		});
});

router.get('/memberinfo/:id', function(req, res){

	userModel.getByIdMember(req.params.id, function(results){

		res.render('admin/memberinfo', {user: results});		
	});

});

router.get('/memberupdate/:id', function(req, res){

	userModel.getByIdMember(req.params.id, function(results){
		res.render('admin/memberupdate', {user: results});		
	});

});

router.post('/memberupdate/:id', function(req, res){
	
	var user = {
		
		email: req.body.email,
		phone: req.body.phone,
		city: req.body.city,
		
		id: req.params.id
	};
	userModel.memberupdate(user, function(status){
		console.log(status);
		if(status){
			res.redirect('/adminhome'); 
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/memberdelete/:id', function(req, res){

	userModel.memberdelete(req.params.id, function(status){
		if(status){
			res.redirect('/adminhome');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/privatecar', function(req, res){

		userModel.getprivatecar(function(results){
			
				res.render('privatecar/privatecarview', {privatecar: results});
			
		});
});


router.get('/microbus', function(req, res){

		userModel.getmicro(function(results){
			
				res.render('micro/microview', {micro: results});
			
		});
});

router.get('/pickup', function(req, res){

		userModel.getpickup(function(results){
			
				res.render('pickup/pickupview', {pickup: results});
			
		});
});



module.exports = router;
