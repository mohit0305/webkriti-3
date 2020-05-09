var mysql =require('mysql');
var connection =mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Mohit@0305',
    database : 'admin'
});

connection.connect(function(err){
    if(!err){
        console.log("database is  connected");
    } else{
        console.log("database is not connected");
    }

});
module.exports =connection;