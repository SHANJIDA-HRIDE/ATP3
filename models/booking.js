var db = require('./db');

module.exports={

getByIdprivate: function(id, callback){

        var sql = "select * from privatecar where privateid="+id;
        db.getResults(sql, function(result){

            if(result.length > 0 ){
               // console.log(result[0].spid);
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    insert: function(boooking, callback){
	    var sql = "insert into boooking values('','"+boooking.userid+"', '"+boooking.location+"', '"+boooking.time+"');";
		db.execute(sql, function(status){
			callback(status);
			
		});
	},


 }