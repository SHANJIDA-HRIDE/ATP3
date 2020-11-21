var express = require('express');
var db = require('./../models/db.js');
var userModel = require('./../models/admin');
var booking = require('./../models/booking');




var router = express.Router();

router.get('/privatecarinfo/:id', function(req, res){

	userModel.getByIdprivatecar(req.params.id, function(results){

		res.render('privatecar/privatecarinfo', {privatecar: results});		
	});

});

var router = express.Router();

router.get('/privatecarinfomember/:id', function(req, res){

	userModel.getByIdprivatecar(req.params.id, function(results){

		res.render('privatecar/privatecarinfomember', {privatecar: results});		
	});

});

router.get('/addprivatecar/addprivatecar/updateprivatecar/:id', function(req, res){

	userModel.getupdateprivatecar(req.params.id, function(results){
		res.render('privatecar/updateprivatecar', {privatecar: results});		
	});

});

router.post('/addprivatecar/addprivatecar/updateprivatecar/:id', function(req, res){
	
	var privatecar = {
		privatename: req.body.privatename,
		privatecost: req.body.privatecost,
		
		avlcar: req.body.avlcar,
		
		id: req.params.id
	};
	userModel.updateprivatecar(privatecar, function(status){
		console.log(status);
		if(status){
			res.redirect('/admin/privatecar');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/addprivatecar/addprivatecar/deleteprivatecar/:id', function(req, res){

	userModel.privatecardelete(req.params.id, function(status){
		if(status){
			res.redirect('/admin/privatecar');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/privatecar', function(req, res){

   res.render('privatecar/privatecar');
});

router.post('/privatecar', (req, res)=>{

	var privatecar = {
		privatename: 	    req.body.privatename,
		privatecost: 	    req.body.privatecost,
		
		avlcar	:        	req.body.avlcar
	};

	userModel.insertprivatecar(privatecar, function(status){
		if(status){
			res.redirect('/admin/privatecar');
		}else{
			res.redirect('/adminhome');
		}
	});
});


router.get('/addprivatecar/addprivatecar/privatebook/:id', function(req, res){

	booking.getByIdprivate(req.params.id, function(status){
		if(status)
        {
        	 res.render('booking/book');	
            
        }
        else{
        	res.redirect('/adminhome');
        }
		   		
	});

});

router.post('/addprivatecar/addprivatecar/privatebook/:id', function(req, res){
	
	var boooking = {
		location: req.body.location,
		time: req.body.time,
		
		
		
		id: req.params.id
	};
	booking.insert(boooking, function(status){
		console.log(status);
		if(status){
			res.redirect('/member/privatecar');
		}else{
			res.redirect('/memberhome');
		}
	});
});




module.exports = router;