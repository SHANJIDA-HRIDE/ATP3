var express = require('express');
var db = require('./../models/db.js');
var userModel = require('./../models/admin');
var booking = require('./../models/booking');




var router = express.Router();

router.get('/microinfo/:id', function(req, res){

	userModel.getByIdmicro(req.params.id, function(results){

		res.render('micro/microinfo', {micro: results});		
	});

});

var router = express.Router();

router.get('/microinfomember/:id', function(req, res){

	userModel.getByIdmicro(req.params.id, function(results){

		res.render('micro/microinfomember', {micro: results});		
	});

});

router.get('/addmicro/addmicro/updatemicro/:id', function(req, res){

	userModel.getupdatemicro(req.params.id, function(results){
		res.render('micro/updatemicro', {micro: results});		
	});

});

router.post('/addmicro/addmicro/updatemicro/:id', function(req, res){
	
	var micro = {
		microname: req.body.microname,
		microcost: req.body.microcost,
		
		avlcar: req.body.avlcar,
		
		id: req.params.id
	};
	userModel.updatemicro(micro, function(status){
		console.log(status);
		if(status){
			res.redirect('/admin/microbus');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/addmicro/addmicro/deletemicro/:id', function(req, res){

	userModel.microdelete(req.params.id, function(status){
		if(status){
			res.redirect('/admin/microbus');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/micro', function(req, res){

   res.render('micro/micro');
});

router.post('/micro', (req, res)=>{

	var micro = {
		microname: 	    req.body.microname,
		microcost: 	    req.body.microcost,
		
		avlcar	:        	req.body.avlcar
	};

	userModel.insertmicro(micro, function(status){
		if(status){
			res.redirect('/admin/microbus');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/addmicro/addmicro/microbook/:id', function(req, res){

	booking.getByIdmicro(req.params.id, function(status){
		if(status)
        {
        	 res.render('booking/book');	
            
        }
        else{
        	res.redirect('/adminhome');
        }
		   		
	});

});

router.post('/addmicro/addmicro/microbook/:id', function(req, res){
	
	var bookmic = {
		location: req.body.location,
		time: req.body.time,
		
		
		
		id: req.params.id
	};
	booking.insertmic(bookmic, function(status){
		console.log(status);
		if(status){
			res.redirect('/member/micro');
		}else{
			res.redirect('/memberhome');
		}
	});
});

router.get('/microinfo/:id', function(req, res){

	userModel.getByIdmicro(req.params.id, function(results){

		res.render('micro/microinfo', {micro: results});		
	});

});




module.exports = router;