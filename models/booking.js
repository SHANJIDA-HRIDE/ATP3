var db = require('./db');

module.exports={

getByIdprivate: function(id, callback){

        var sql = "select * from privatecar where privateid="+id;
        db.getResults(sql, function(result){

            if(result.length > 0 ){
           
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    getByIdmicro: function(id, callback){

        var sql = "select * from micro where microid="+id;
        db.getResults(sql, function(result){

            if(result.length > 0 ){
              ;
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    insertmic: function(bookmic, callback){
	    var sql = "insert into bookmic values('','"+bookmic.userid+"', '"+bookmic.address+"', '"+bookmic.date+"');";
		db.execute(sql, function(status){
			callback(status);
			
		});
	},

     getByIdpickup: function(id, callback){

        var sql = "select * from pickup where pickupid="+id;
        db.getResults(sql, function(result){

            if(result.length > 0 ){
              ;
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    insertpickup: function(bookpick, callback){
        var sql = "insert into bookpick values('','"+bookpick.userid+"', '"+bookpick.address+"', '"+bookpick.date+"');";
        db.execute(sql, function(status){
            callback(status);
            
        });
    },



 }