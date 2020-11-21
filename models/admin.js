var db = require('./db');

module.exports={

	getprofile : function(callback){
		var sql = "select * from user where type= 1";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	getupdateadmin: function(id, callback){
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

	updateadmin : function(user, callback){
		
		var sql = "update user set username='" + user.username + "', email='" + user.email + "', phone='" + user.phone + "', password='" + user.password + "', gender='" + user.gender + "', city='" + user.city + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			callback(status);
		});
	},

	getmember : function(callback){
		var sql = "select * from user where type= 2";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	getByIdMember: function(id, callback){
             console.log(id);

	          console.log(id);
			var sql = "select * from user where userid='"+id+"'" ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},

		memberupdate : function(user, callback){
		
		var sql = "update user set  email='" + user.email + "', phone='" + user.phone + "', city='" + user.city + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			 console.log(status);
			callback(status);
		});
	},


memberdelete : function(id, callback){
	    var sql = "delete from user where userid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},

     getprivatecar: function(callback){
		var sql = "select * from privatecar  ";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	getmicro: function(callback){
		var sql = "select * from micro  ";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	getpickup: function(callback){
		var sql = "select * from pickup  ";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},



	getByIdprivatecar: function(id, callback){
             console.log(id);

	          console.log(id);
			var sql = "select * from privatecar where privateid='"+id+"'" ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},

		getByIdmicro: function(id, callback){
             console.log(id);

	          console.log(id);
			var sql = "select * from micro where microid='"+id+"'" ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},

		getByIdpickup: function(id, callback){
             console.log(id);

	          console.log(id);
			var sql = "select * from pickup where pickupid='"+id+"'" ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},

		getupdateprivatecar: function(id, callback){
			console.log(id);
			
				console.log(id);
						var sql = "select * from privatecar where privateid='"+id+"' " ; 
						db.getResults(sql, function(result){
							
							if( result.length > 0 ){
								
								callback(result);
				
							}else{
								callback([]);
							}
						});
					},

					getupdatemicro: function(id, callback){
			console.log(id);
			
				console.log(id);
						var sql = "select * from micro where microid='"+id+"' " ; 
						db.getResults(sql, function(result){
							
							if( result.length > 0 ){
								
								callback(result);
				
							}else{
								callback([]);
							}
						});
					},

					getupdatepickup: function(id, callback){
			console.log(id);
			
				console.log(id);
						var sql = "select * from pickup where pickupid='"+id+"' " ; 
						db.getResults(sql, function(result){
							
							if( result.length > 0 ){
								
								callback(result);
				
							}else{
								callback([]);
							}
						});
					},


					updateprivatecar : function(privatecar, callback){
		
          var sql = "update privatecar set  privatename='" + privatecar.privatename + "', privatecost='" + privatecar.privatecost + "', avlcar='" + privatecar.avlcar + "' where privateid=" + privatecar.id;

		 db.execute(sql, function (status) {
			callback(status);
		});
	},

	

	updatemicro : function(micro, callback){
		
          var sql = "update micro set  microname='" + micro.microname + "', microcost='" + micro.microcost + "', avlcar='" + micro.avlcar + "' where microid=" + micro.id;

		 db.execute(sql, function (status) {
			callback(status);
		});
	},

	updatepickup : function(pickup, callback){
		
          var sql = "update pickup set  pickupname='" + pickup.pickupname + "',pickupcost='" + pickup.pickupcost + "', avlcar='" + pickup.avlcar + "' where pickupid=" + pickup.id;

		 db.execute(sql, function (status) {
			callback(status);
		});
	},




	privatecardelete : function(id, callback){
	    var sql = "delete from privatecar where privateid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},	

	microdelete : function(id, callback){
	    var sql = "delete from micro where microid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},	

	pickupdelete : function(id, callback){
	    var sql = "delete from pickup where pickupid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},	


	
			insertprivatecar: function(privatecar, callback){
		     var sql = "insert into privatecar VALUES ('', '"+privatecar.privatename+"' , '"+privatecar.privatecost+"' , '"+privatecar.avlcar+"')";
		
		//console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},	

	insertmicro: function(micro, callback){
		     var sql = "insert into micro VALUES ('', '"+micro.microname+"' , '"+micro.microcost+"' , '"+micro.avlcar+"')";
		
		//console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},	

	insertpickup: function(pickup, callback){
		     var sql = "insert into pickup VALUES ('', '"+pickup.pickupname+"' , '"+pickup.pickupcost+"' , '"+pickup.avlcar+"')";
		
		//console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},						

}
