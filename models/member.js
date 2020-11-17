var db = require('./db');

module.exports={

	getprofile : function(callback){
		var sql = "select * from user where type= 2";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	getupdatemember: function(id, callback){
			console.log(id);
			
				console.log(id);
						var sql = "select * from user where userid='"+id+"' " ; 
						db.getResults(sql, function(result){
							
							if( result.length > 0 ){
								
								callback(result);
				
							}else{
								callback([]);
							}
						});
					},

	updatemember : function(user, callback){
		
		var sql = "update user set username='" + user.username + "', email='" + user.email + "', phone='" + user.phone + "', password='" + user.password + "', gender='" + user.gender + "', city='" + user.city + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			callback(status);
		});
	},
				

}