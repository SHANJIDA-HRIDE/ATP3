var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('/', function (req, res) {
	res.render('login/index');
});

router.post('/', function (req, res) {



	var user = {
		username: req.body.username,
		password: req.body.password
	}
	//console.log(user.username);
	userModel.validate(user, function (status,userid,type) {


		if (type == 1) {

			res.cookie('username',req.body.username);
			res.cookie('userid',userid);
		   var abc=req.cookies['userid'];
           console.log(abc);
	  

			res.redirect('/adminhome');
		}

		else if (type == 2) {
				
			res.cookie('username',req.body.username);
			res.cookie('userid',userid);
		   var abc=req.cookies['userid'];
           console.log(abc);
	   

			res.redirect('/memberhome');
		}

		
		else {

			res.redirect('/login');

			
		}

	


	});
	


}); 




module.exports = router;