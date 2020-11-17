var db = require('./db');

module.exports={


registeradmin : function(user, callback){
	    var sql = "insert into user values('','" + user.username + "', '" + user.email + "', '" + user.phone + "','" + user.password + "','" + user.gender + "','" + user.city + "','" + user.type + "' )";
		db.execute(sql, function(status){
			callback(status);
			
		});
	},



registermember : function(user, callback){
	    var sql = "insert into user values('','" + user.username + "', '" + user.email + "', '" + user.phone + "','" + user.password + "','" + user.gender + "','" + user.city + "','" + user.type + "')";
		db.execute(sql, function(status){
			callback(status);
			
		});
	},

}