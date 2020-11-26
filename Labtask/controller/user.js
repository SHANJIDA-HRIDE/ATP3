const express = require('express');
const userModel	= require.main.require('./models/userModel');
const router = express.Router();

router.get('/create', (req, res)=>{
	res.render('user/create'); 
})

router.post('/create', (req, res)=>{

	var user = {
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/create');
		}
	});
})


router.get('/userlist/:id', (req, res)=>{

	//var data = req.params.id;
	//res.send(data);
	res.render('user/edit/:id', { userlist: result}); 
	
})


router.get('/edit/:id', function(req, res){

	userModel.getupdate(req.params.id, function(results){
		res.render('user/edit', {user: results});		
	});

});

router.post('/edit/:id', function(req, res){
	
	var user = {
		username: req.body.username,
		
		password: req.body.password,
		
		type: req.body.type,
		id: req.params.id
	};
	userModel.update(user, function(status){
		console.log(status);
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/home');
		}
	});
});

router.get('/delete/:id', function(req, res){

	userModel.delete(req.params.id, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/home/userlist');
		}
	});
});


module.exports = router;


//validation -> express-validator (https://www.npmjs.com/package/express-validator)
//file upload -> express-fileupload (https://www.npmjs.com/package/express-fileupload)
